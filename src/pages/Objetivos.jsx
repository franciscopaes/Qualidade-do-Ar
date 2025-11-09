import React from "react";
import "./Objetivos.css";
import { FaLeaf, FaCloudSun, FaCity } from "react-icons/fa";

const Objetivos = () => {
  return (
    <div className="objetivos-container" id="objetivos">
      <h1 className="objetivos-titulo">Objetivo do Projeto</h1>
      <div className="objetivos-linha"></div>
      <p className="objetivos-descricao">
        O projeto de Monitoramento da Qualidade do Ar busca analisar e divulgar,
        de forma acessível, os índices de poluição atmosférica, promovendo a
        conscientização ambiental e o incentivo a práticas sustentáveis.
      </p>

      <div className="cards-container">
        <div className="card">
          <div className="icon-wrapper">
            <FaLeaf className="icon" />
          </div>
          <h3 className="card-titulo">Conscientização Ambiental</h3>
          <p className="card-descricao">
            Promove o entendimento da importância do ar limpo para a saúde e o
            equilíbrio do planeta.
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <FaCloudSun className="icon" />
          </div>
          <h3 className="card-titulo">Monitoramento Inteligente</h3>
          <p className="card-descricao">
            Utiliza tecnologia para acompanhar e exibir dados sobre a qualidade
            do ar em tempo real.
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <FaCity className="icon" />
          </div>
          <h3 className="card-titulo">Cidades Sustentáveis</h3>
          <p className="card-descricao">
            Contribui para ambientes urbanos mais saudáveis e alinhados aos
            Objetivos de Desenvolvimento Sustentável.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objetivos;
