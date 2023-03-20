import React from "react";
import { QuestionHeader, WrapperResponse } from "./styles";
import { Container } from "../../pages/home/styles";

interface PropsResponse {
  questionHeaderText: string | null;
  children?: React.ReactNode;
}

export default function ResponseBox({
  children,
  questionHeaderText,
}: PropsResponse) {
  return (
    <WrapperResponse>
      <QuestionHeader>
        <Container>{questionHeaderText}</Container>
      </QuestionHeader>
      <Container>{children}</Container>
    </WrapperResponse>
  );
}
