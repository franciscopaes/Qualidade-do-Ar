import React from "react";
import Home from "./pages/Home";
import Objetivos from "./pages/Objetivos";
import Ods from "./pages/Ods";
import Importancia from "./pages/Importancia";
import "./pages/Home.css";
import "./pages/VoltarAoTopo";
import VoltarAoTopo from "./pages/VoltarAoTopo";

function App() {
  return (
    <>
      <Home />
      <Objetivos />
      <Ods />
      <Importancia />
      <VoltarAoTopo />
    </>
  );
}

export default App;
