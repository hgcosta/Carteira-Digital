import React from "react";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import {
  ContainerBarChart,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles";
import formatCurrency from "../../utils/formatCurrency";

interface IBarChartBox {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChatBox: React.FC<IBarChartBox> = ({ title, data }) => {
  return (
    <ContainerBarChart>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor="ponter"
                  fill={indicator.color}
                ></Cell>
              ))}
            </Bar>
            {/* <Tooltip formatter={(value) => formatCurrency(Number(value))} /> */}
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </ContainerBarChart>
  );
};

export default BarChatBox;
