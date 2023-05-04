import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";

import SelectInput from "../../Components/SelectInput";
import ContentHeader from "../../Components/ContentHeader";
import HistoryFinanceCard from "../../Components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

const List: React.FC = () => {
  interface IData {
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
  }

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

  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 2,
      label: "Fevereiro",
    },
    {
      value: 3,
      label: "Março",
    },
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 6,
      label: "Junho",
    },
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
    {
      value: 10,
      label: "Outubro",
    },
    {
      value: 11,
      label: "Novembro",
    },
    {
      value: 12,
      label: "Dezembro",
    },
  ];

  const years = [
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 },
  ];

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormated: item.amount,
        frequency: item.frequency,
        dateFormated: item.date,
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader
        title={titleOptions.title}
        lineColor={titleOptions.lineColor}
      >
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.amountFormated}
            amout={item.dateFormated}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
