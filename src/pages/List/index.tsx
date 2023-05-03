import React, { useMemo } from "react";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";

import SelectInput from "../../Components/SelectInput";
import ContentHeader from "../../Components/ContentHeader";
import HistoryFinanceCard from "../../Components/HistoryFinanceCard";

const List: React.FC = () => {
  const { type } = useParams();
  const titleOptions = useMemo(() => {
    return type === "entradas"
      ? { title: "Entradas", lineColor: "#e44c4e" }
      : { title: "Saídas", lineColor: "rgb(78, 65, 240)" };
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
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
      </Content>
    </Container>
  );
};

export default List;
