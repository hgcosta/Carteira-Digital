import React from "react";

import { Container } from "./styles";

import SelectInput from "../../Components/SelectInput";

import ContentHeader from "../../Components/ContentHeader";

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
    </Container>
  );
};

export default List;
