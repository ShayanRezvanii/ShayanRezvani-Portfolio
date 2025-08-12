import { useState } from "react";
import "./App.css";
import Container from "./layouts/Container";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
