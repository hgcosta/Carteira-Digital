import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  background-color: red;
`;

export const ContainerBarChart = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;
  > h2 {
    margin-left: 16px;
    margin-bottom: 10px;
  }
  @media (max-width: 770px) {
    padding: 30px 5px;
  }
`;

export const SideRight = styled.main`
  min-height: 150px;
  width: 130px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`;

export const LegendContainer = styled.ul`
  list-style-type: none;
  max-height: 170px;
  overflow-y: scroll;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  scrollbar-color: rgb(27, 31, 56) ${(props) => props.theme.colors.tertiary};
  scrollbar-width: thin;
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 16px;

  > div {
    background-color: ${(props) => props.color};
    width: 45px;
    height: 45px;
    border-radius: 5px;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`;
