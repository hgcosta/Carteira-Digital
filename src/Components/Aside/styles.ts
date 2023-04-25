import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};
`;
