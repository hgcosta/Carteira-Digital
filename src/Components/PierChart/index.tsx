import React from "react";

import {
  Container,
  SideLeft,
  Legend,
  LegendContainer,
  SideRight,
} from "./styles";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PierChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent">
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);

export default PierChart;
