import React from "react";
import { ListItem, ListWrapper } from "./styles";

interface ListItems {
  nome: string;
}

interface ListProps {
  list: ListItems[];
}

export default function ListQuestions({ list }: ListProps) {
  return (
    <ListWrapper>
      {list.map((question) => {
        return <ListItem>{question.nome}</ListItem>;
      })}
    </ListWrapper>
  );
}
