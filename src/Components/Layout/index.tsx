import React from "react";
import { Grid } from "./styles";
import Aside from "../Aside";
import MainHeader from "../MainHeader";
import Content from "../Content";
import ChildrenProps from "../../utils/interfaceChildren";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
