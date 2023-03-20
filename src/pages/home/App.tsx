import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import ResponseBox from "../../components/response/ResponseBox";
import Typical from "react-typical";
import { Button, FormWrapper, Input } from "../../components/input/styles";
import ListQuestions from "../../components/listQuestions/ListQuestions";

interface ListProps {
  nome: string;
}

function App() {
  const [question, setQuestion] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [questionHeader, setQuestionHeader] = useState<string>("");
  const [listQuestions, setListQuestions] = useState<ListProps[]>([
    { nome: "como centralizar uma div" },
  ]);

  let arrayPalavras = questionHeader.split(" ");
  let novaString = arrayPalavras.slice(5).join(" ");
  console.log("🚀 ~ file: App.tsx:22 ~ App ~ novaString:", novaString);

  const API_URL = "https://api.openai.com/v1/completions";
  const API_KEY = "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";

  const sendChatMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuestionHeader(question);
    setQuestion("");
    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 3000, // tamanho da resposta
        temperature: 1, // criatividade na resposta
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("🚀 ~ file: App.tsx:43 ~ .then ~ json:", json);
        setResponse(json.choices[0].text);
        setListQuestions((prevstate) => [
          ...prevstate,
          { nome: json.choices[0].text.slice(0, 10) },
        ]);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Wrapper>
      <ListQuestions list={listQuestions} />
      <Container>
        <ResponseBox questionHeaderText={questionHeader}>
          {response !== "" && (
            <Typical steps={[response, 2000]} loop={1} wrapper="p" />
          )}
        </ResponseBox>
        <FormWrapper onSubmit={sendChatMessage}>
          <Input
            value={question}
            tabIndex={0}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ maxHeight: "200px" }}
          />
          <Button type="submit">
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9" />
            </svg>
          </Button>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default App;
