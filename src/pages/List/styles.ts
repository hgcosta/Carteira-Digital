import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;

  .tag-filter {
    font-size: 15px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;
    position: relative;
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: solid 4px ${(props) => props.theme.colors.sucess};
    position: absolute;
    bottom: -10px;
  }

  .tag-filter-eventual::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: solid 4px ${(props) => props.theme.colors.warning};
    position: absolute;
    bottom: -10px;
  }

  .tag-actived {
    opacity: 1;
  }
`;
