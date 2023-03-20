import { HTMLAttributes } from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: string;
}

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.div`
  background-color: #444654;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Container = styled.div<ThemedStyledProps<ContainerProps, any>>`
  width: 60%;
  margin: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
