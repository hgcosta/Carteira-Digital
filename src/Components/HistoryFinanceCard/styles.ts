import styled, { keyframes } from "styled-components";

interface ITitleProps {
  color: string;
}

const animate = keyframes`
  0%{
    transform: translateY(-100px);
    opacity: 0;
  }
  50%{
    opacity:.3;
  }
  100%{
    transform: translateY(0px);

    opacity:1
  }

`;

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
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
  animation: ${animate} 0.5s;

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
  > div span {
    font-weight: 500;
    font-size: 22px;
  }
`;

export const Tag = styled.div<ITitleProps>`
  position: absolute;
  width: 1px;
  height: 30px;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.color};
`;
