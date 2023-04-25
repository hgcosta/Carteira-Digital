import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  border-bottom: solid 1px ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
