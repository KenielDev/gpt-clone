import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  position: relative;
  border: 1px solid #0000001a;
  background-color: #40414f;
  color: #000000;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding-left: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Input = styled.input`
  overflow-y: hidden;
  margin: 0;
  resize: none;
  border: none;
  background-color: transparent;
  padding: 10px;
  color: white;
  outline: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    padding-left: 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  border-radius: 4px;
  text-align: center;
  color: #6b7280;
  transition: all 0.2s;

  @media (min-width: 768px) {
    bottom: 2.5rem;
    right: 1rem;
    top: 1.2rem;
  }

  &:hover:not(:disabled) {
    background-color: #40414f;
    color: #4b5563;
  }

  &:disabled:hover {
    background-color: transparent;
    color: #6b7280;
  }

  &:focus {
    outline: none;
  }

  svg {
    height: 1em;
    width: 1em;
    margin-right: 4px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
