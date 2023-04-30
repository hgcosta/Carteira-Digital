import React from "react";

import { Container } from "./styles";

import ChildrenProps from "../../utils/interfaceChildren";

const Content: React.FC<ChildrenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
