import React, { useState, useMemo } from "react";

import { Container, Content } from "./styles";

import SelectInput from "../../Components/SelectInput";
import WalletBox from "../../Components/WalletBox";
import MenssageBox from "../../Components/MenssageBox";
import PierChart from "../../Components/PierChart";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";

import ContentHeader from "../../Components/ContentHeader";
import ListOfmonths from "../../utils/months";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    return ListOfmonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;
    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste",
        description: "Sua Carteira está negativa!",
        footerText: "Economize para não ter problemas",
        icon: sadImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Uffa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo tente poucar o seu dinheiro",
        icon: grinningImg,
      };
    } else {
      return {
        title: "Muito Bem!",
        description: "Sua Carteira está positiva!",
        footerText: "Continue assim, considere investir o seu saldo.",
        icon: happyImg,
      };
    }
  }, [totalBalance]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid Month value. Is Accept 0 - 24");
    }
  };

  const handleYearsSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("Invalid Year value. Is accept inter number");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#e44c4e">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearsSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          color="#4e41f0"
          title="Saldo"
          amout={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
        />
        <WalletBox
          color="#F7931B"
          title="Entrada"
          amout={totalGains}
          footerLabel="Atualizado com base nas entradas"
          icon="arrowUp"
        />
        <WalletBox
          color="#E44C4E"
          title="Saídas"
          amout={totalExpenses}
          footerLabel="Atualizado com base nas saídas"
          icon="arrowDown"
        />
        <MenssageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PierChart />
      </Content>
    </Container>
  );
};

export default Dashboard;
