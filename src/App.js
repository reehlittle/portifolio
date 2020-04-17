import React from "react";

import GlobalStyle from "./styles/global";
import NavBar from "./components/NavBar";
import Initial from "./pages/Initial";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Initial />
    </>
  );
}

export default App;
