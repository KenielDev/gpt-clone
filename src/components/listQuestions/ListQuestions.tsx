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
      {list.length === 0 ? (
        <p>Nenhuma pergunta até o momento</p>
      ) : (
        list.map((question, index) => {
          return <ListItem key={index}>{question.nome}</ListItem>;
        })
      )}
    </ListWrapper>
  );
}
