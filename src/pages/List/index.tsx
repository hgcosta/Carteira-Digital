import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";

import SelectInput from "../../Components/SelectInput";
import ContentHeader from "../../Components/ContentHeader";
import HistoryFinanceCard from "../../Components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import ListOfmonths from "../../utils/months";
import { v4 as uuidv4 } from "uuid";

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dateFormated: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedFrequency, setSelectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

  const { type } = useParams();
  const titleOptions = useMemo(() => {
    return type === "entradas"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#e44c4e" };
  }, [type]);

  const [data, setData] = useState<IData[]>([]);

  const listData = useMemo(() => {
    return type === "entradas" ? gains : expenses;
  }, [type]);

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

    listData.forEach((item) => {
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
  }, [listData]);

  const handleFrequencyCLick = (frenquency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frenquency
    );

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frenquency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prev) => [...prev, frenquency]);
    }
  };

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

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const formattedDate = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormated: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(formattedDate);
  }, [listData, monthSelected, yearSelected, selectedFrequency]);

  return (
    <Container>
      <ContentHeader
        title={titleOptions.title}
        lineColor={titleOptions.lineColor}
      >
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
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            selectedFrequency.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyCLick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            selectedFrequency.includes("eventual") && "tag-actived"
          }`}
          onClick={() => handleFrequencyCLick("eventual")}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormated}
            amout={item.amountFormated}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
