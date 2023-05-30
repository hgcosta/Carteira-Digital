import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1345) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media (max-width: 420px) {
    padding: 15px;
    margin-bottom: 7px;
  }
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

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  > div {
    background-color: ${(props) => props.color};
    width: 45px;
    height: 45px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
  @media (max-width: 1345px) {
    font-size: 14px;
    margin: 3px 0;

    > div {
      height: 40px;
      width: 40px;
      line-height: 40px;
    }
    > span {
      margin-left: 7px;
    }
  }
  @media (max-width: 420px) {
    > div {
      font-size: 12px;
    }
  }
`;

export const SideRight = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 260px;
  @media (max-width: 1345px) {
    height: 100%;
  }
`;
