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
`;

export const Controller = styled.div`
  display: flex;
`;
