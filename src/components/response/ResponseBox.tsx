import React from "react";
import { QuestionHeader, WrapperResponse } from "./styles";

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
      <QuestionHeader>{questionHeaderText}</QuestionHeader>
      {children}
    </WrapperResponse>
  );
}
