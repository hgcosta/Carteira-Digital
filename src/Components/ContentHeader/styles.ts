import styled from "styled-components";

interface ITitleContainer {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<ITitleContainer>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.6rem;
    &:after {
      content: "";
      display: block;
      width: 35px;
      border-bottom: solid 4px ${(props) => props.lineColor};
    }
  }
  @media (max-width: 420px) {
    > h1 {
      font-size: 22px;
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  @media (max-width: 320px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
