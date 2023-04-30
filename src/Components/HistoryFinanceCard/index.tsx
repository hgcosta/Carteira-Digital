import React from "react";

import { Container, Tag } from "./styles";

interface IHistoryFinanceCard {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amout: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amout,
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amout}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
