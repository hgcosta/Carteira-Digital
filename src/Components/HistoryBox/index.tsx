import React from "react";

import {
  Container,
  ChartContainer,
  Header,
  LegendContainer,
  Legend,
} from "./styles";

import formatCurrency from "../../utils/formatCurrency";

import {
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amoutOutput: number;
  }[];
  lineColorAmoutEntry: string;
  lineColorAmoutOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmoutEntry,
  lineColorAmoutOutput,
}) => {
  return (
    <Container>
      <Header>
        <h2>Histórico de Saldo</h2>
        <LegendContainer>
          <Legend color={lineColorAmoutEntry}>
            <div>{}</div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmoutOutput}>
            <div>{}</div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </Header>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            <Line
              type="monotone"
              dataKey="amountEntry"
              name="Entradas"
              stroke={lineColorAmoutEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amoutOutput"
              name="Saídas"
              stroke={lineColorAmoutOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default HistoryBox;
