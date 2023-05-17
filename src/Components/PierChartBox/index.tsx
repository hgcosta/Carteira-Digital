import React from "react";

import {
  Container,
  SideLeft,
  Legend,
  LegendContainer,
  SideRight,
} from "./styles";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface IPierChartProps {
  data: {
    name: string;
    persent: number;
    value: number;
    color: string;
  }[];
}

const PierChartBox: React.FC<IPierChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((indicator) => (
          <Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.persent}</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PierChartBox;
