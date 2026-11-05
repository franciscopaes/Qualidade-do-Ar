import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./VoltarAoTopo.css";

const VoltarAoTopo = () => {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const verificarScroll = () => {
            const chegouNoFim =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100;
            setVisivel(chegouNoFim);
        };

        window.addEventListener("scroll", verificarScroll);
        verificarScroll();
        return () => window.removeEventListener("scroll", verificarScroll);
    }, []);

    const voltarAoTopo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`voltar-topo ${visivel ? "visivel" : ""}`}
            onClick={voltarAoTopo}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
        >
            <FiArrowUp />
        </button>
    );
};

export default VoltarAoTopo;