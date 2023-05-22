import React, { useState, useMemo } from "react";

import { Container, Content } from "./styles";

import SelectInput from "../../Components/SelectInput";
import WalletBox from "../../Components/WalletBox";
import MenssageBox from "../../Components/MenssageBox";
import PierChartBox from "../../Components/PierChartBox";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";
import HistoryBox from "../../Components/HistoryBox";
import BarChatBox from "../../Components/BarChartBox";

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

  const relationExpensesVerusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const persentGains = (totalGains / total) * 100;
    const persentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        percent: Number(persentGains.toFixed(1)),
        value: totalGains,
        color: "#E44C4E",
      },
      {
        name: "Saídas",
        percent: Number(persentExpenses.toFixed(1)),
        value: totalExpenses,
        color: "rgb(247, 147, 27)",
      },
    ];

    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return ListOfmonths.map((_, indexMonth) => {
      let amountEntry = 0;
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();
        if (gainMonth === indexMonth && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error(
              "AmountEntry is invalid. amountEntry must be valid number"
            );
          }
        }
      });

      let amoutOutput = 0;
      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();
        if (expenseMonth === indexMonth && expenseYear === yearSelected) {
          try {
            amoutOutput += Number(expense.amount);
          } catch {
            throw new Error(
              "amoutOutput is invalid. amoutOutput must be valid number"
            );
          }
        }
      });

      return {
        monthNumber: indexMonth,
        month: ListOfmonths[indexMonth].substring(0, 3),
        amountEntry,
        amoutOutput,
      };
    }).filter((item) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return (
        (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
        yearSelected < currentYear
      );
    });
  }, [yearSelected]);

  const relationExpensesRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((expense) => {
        if (expense.frequency === "recorrente") {
          return (amountRecurrent += Number(expense.amount));
        }
        if (expense.frequency === "eventual") {
          return (amountEventual += Number(expense.amount));
        }
      });

    const total = amountEventual + amountRecurrent;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: "#f7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: "#e44c4e",
      },
    ];
  }, [yearSelected, monthSelected]);

  const relationGainsRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((gain) => {
        if (gain.frequency === "recorrente") {
          return (amountRecurrent += Number(gain.amount));
        }
        if (gain.frequency === "eventual") {
          return (amountEventual += Number(gain.amount));
        }
      });

    const total = amountEventual + amountRecurrent;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: "#f7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: "#e44c4e",
      },
    ];
  }, [yearSelected, monthSelected]);

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
        <PierChartBox data={relationExpensesVerusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmoutEntry="#e44c4e"
          lineColorAmoutOutput="#f7931B"
        />
        <BarChatBox title="Saídas" data={relationExpensesRecurrentVsEventual} />
        <BarChatBox title="Entradas" data={relationGainsRecurrentVsEventual} />
      </Content>
    </Container>
  );
};

export default Dashboard;
