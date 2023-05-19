import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;

  margin: 15px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  padding: 30px 20px;
  border-radius: 7px;
`;

export const ChartContainer = styled.div`
  height: 360px;
  margin-top: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > h2 {
    margin: 0px 16px;
  }
`;

export const LegendContainer = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding-right: 16px;
  margin-left: 15px;
  > div {
    background-color: ${(props) => props.color};
    width: 28px;
    height: 28px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`;
