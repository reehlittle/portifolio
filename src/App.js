import React from "react";

import GlobalStyle from "./styles/global";
import NavBar from "./components/NavBar";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </>
  );
}

export default App;
