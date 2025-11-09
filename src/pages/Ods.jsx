import React from "react";
import "./Ods.css";
import { FaCity, FaHeartbeat } from "react-icons/fa";
import ods11 from "../assets/ods-11.svg"; 

const Ods = () => {
  return (
    <div className="ods-page" id="ods">
      <div className="ods-container">
        <h1 className="ods-title">ODS 11 - Cidades e Comunidades Sustentáveis</h1>
        <div className="ods-divider"></div>

        <div className="ods-content">
          <div className="ods-image">
            <img src={ods11} alt="ODS 11" />
          </div>

          <div className="ods-text">
            <p>
              O Objetivo de Desenvolvimento Sustentável 11 busca{" "}
              <strong>
                tornar as cidades e os assentamentos humanos inclusivos, seguros,
                resilientes e sustentáveis.
              </strong>{" "}
              Este objetivo reconhece que as cidades são centros de inovação e
              crescimento econômico, mas também enfrentam desafios como poluição
              do ar, gestão inadequada de resíduos e expansão urbana descontrolada.
            </p>
            <p>Nosso projeto contribui diretamente para a ODS 11 ao monitorar a qualidade
               do ar em áreas urbanas, fornecendo dados que podem orientar políticas públicas
               e conscientizar a população sobre a importância do ar limpo para cidades sustentáveis e saudáveis.</p>

            <div className="ods-icons">
              <div className="ods-icon-box">
                <FaCity className="ods-icon" />
                <div>
                  <h4>Cidades Sustentáveis</h4>
                  <p>Redução da poluição</p>
                </div>
              </div>

              <div className="ods-icon-box">
                <FaHeartbeat className="ods-icon" />
                <div>
                  <h4>Saúde Pública</h4>
                  <p>Ar limpo para todos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ods;
