import styled from "styled-components";

interface IContainerProps {
  color: string;
}

interface ITitleProps {
  color: string;
}

export const Container = styled.li<IContainerProps>`
  background-color: ${(props) => props.color};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translate(10px);
  }

  > div {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Tag = styled.div<ITitleProps>`
  position: absolute;
  width: 10px;
  height: 60%;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.color};
`;
