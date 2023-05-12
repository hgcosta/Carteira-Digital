import React, { useState, useMemo } from "react";

import { Container, Content } from "./styles";

import SelectInput from "../../Components/SelectInput";
import WalletBox from "../../Components/WalletBox";

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
          amout={500.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
        />
        <WalletBox
          color="#F7931B"
          title="Entrada"
          amout={1500.0}
          footerLabel="Atualizado com base nas entradas"
          icon="arrowUp"
        />
        <WalletBox
          color="#E44C4E"
          title="Saídas"
          amout={1000.0}
          footerLabel="Atualizado com base nas saídas"
          icon="arrowDown"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
