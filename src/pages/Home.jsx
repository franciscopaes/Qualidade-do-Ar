import React from "react";
import "./Home.css";
import bg from "../assets/bg.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="content">
          <h1>Qualidade do Ar</h1>
          <p>
            Monitoramento e Conscientização sobre a Importância do Ar Limpo
            <br />
            para Nossa Saúde e Meio Ambiente
          </p>
          <a href="https://qualidadedoar.streamlit.app/" className="consultar-btn">Consultar Qualidade do Ar</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
