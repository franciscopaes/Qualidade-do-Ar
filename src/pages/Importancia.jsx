import React from "react";
import "./Importancia.css";
import { FaHeartbeat, FaLeaf, FaCity } from "react-icons/fa";

const Importancia = () => {
  return (
    <div className="objetivos-container" id="importancia">
      <h1 className="objetivos-titulo">Importância</h1>
      <div className="objetivos-linha"></div>
      <p className="objetivos-descricao">
        A qualidade do ar é um dos fatores ambientais mais importantes para o bem-estar humano e a preservação do planeta. Respirar um ar limpo é essencial para manter a saúde, equilibrar os ecossistemas e combater os efeitos das mudanças climáticas. No entanto, o aumento das atividades urbanas e industriais tem elevado significativamente os níveis de poluição atmosférica, tornando o monitoramento constante uma necessidade global.
      </p>

      <div className="cards-container">
        <div className="card">
          <div className="icon-wrapper">
            <FaHeartbeat className="icon" />
          </div>
          <h3 className="card-titulo">Saúde Humana</h3>
          <p className="card-descricao">
            A má qualidade do ar está diretamente ligada a doenças respiratórias, cardiovasculares e até neurológicas. Partículas poluentes como o material particulado (MP2.5) e o dióxido de nitrogênio (NO₂) podem afetar seriamente os pulmões e o coração. Monitorar e reduzir esses poluentes salva vidas.
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <FaLeaf className="icon" />
          </div>
          <h3 className="card-titulo">Equilíbrio Ambiental</h3>
          <p className="card-descricao">
            Os poluentes atmosféricos também afetam as plantas, os solos e os corpos d’água. Gases como o ozônio e o dióxido de enxofre prejudicam o crescimento vegetal e alteram o equilíbrio ecológico. Preservar a qualidade do ar é proteger a biodiversidade.
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <FaCity className="icon" />
          </div>
          <h3 className="card-titulo">Desenvolvimento Sustentável</h3>
          <p className="card-descricao">
            Manter o ar limpo é essencial para o futuro das cidades. A adoção de tecnologias limpas, transporte sustentável e políticas ambientais garante qualidade de vida e sustentabilidade para as próximas gerações. Um ar limpo é um investimento no futuro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Importancia;
