import React from "react";

import { Container, Content } from "./styles";

import SelectInput from "../../Components/SelectInput";

import ContentHeader from "../../Components/ContentHeader";

import HistoryFinanceCard from "../../Components/HistoryFinanceCard";

const List: React.FC = () => {
  const options = [
    {
      value: "Rodrigo",
      label: "Rodrigo",
    },
    {
      value: "Hugo",
      label: "Hugo",
    },
    {
      value: "Hc",
      label: "Hc",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="17/02/1994"
          amout="R$ 250,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
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
