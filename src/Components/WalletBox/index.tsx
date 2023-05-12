import React, { useMemo } from "react";

import { Container } from "./styles";

import dolarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";
import { title } from "process";

interface IWalletBoxProps {
  title: string;
  amout: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amout,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = useMemo(() => {
    if (icon === "dolar") {
      return dolarImg;
    } else if (icon === "arrowUp") {
      return arrowUpImg;
    } else if (icon === "arrowDown") {
      return arrowDownImg;
    } else {
      return dolarImg;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>{amout}</h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default WalletBox;
