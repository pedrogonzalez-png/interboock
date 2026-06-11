import React, { useState, useEffect } from "react";

export default function CadastroCard({ pessoa, excluir, index }) {
  // Estados para simular dados vitais em tempo real
  const [batimentos, setBatimentos] = useState(72);
  const [glicose, setGlicose] = useState(100);

  // Efeito de pulsação: atualiza os dados a cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setBatimentos(Math.floor(Math.random() * (76 - 70 + 1) + 70));
      setGlicose((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="cartao-paciente">
      {/* LADO ESQUERDO: Informações Pessoais */}
      <div className="info-pessoal">
        <p><strong>NOME:</strong> {pessoa?.nome}</p>
        <p><strong>EMAIL:</strong> {pessoa?.email}</p>
        <p><strong>CONVÊNIO:</strong> {pessoa?.convenio || "NÃO INFORMADO"}</p>
        
        <button className="btn-excluir" onClick={() => excluir(index)}>
          EXCLUIR MONITORAMENTO
        </button>
      </div>

      {/* LADO DIREITO: Sinais Vitais com o SVG estilo Hardware */}
      <div className="sinais-vitais">
        <div className="chip-animado">
          {/* VETOR SVG DO CHIP */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#030a0a" stroke="#45b5e7" strokeWidth="1" />
            <circle cx="50" cy="50" r="35" fill="#061515" stroke="#58b58d" strokeWidth="2" />
            
            <path d="M 50 15 A 35 35 0 0 1 80 30" fill="none" stroke="#45b5e7" strokeWidth="4" strokeLinecap="square" strokeDasharray="6 4" />
            
            <g stroke="#58b58d" strokeWidth="2" strokeLinecap="square">
              <line x1="38" y1="35" x2="38" y2="30" /><line x1="44" y1="35" x2="44" y2="30" />
              <line x1="50" y1="35" x2="50" y2="30" /><line x1="56" y1="35" x2="56" y2="30" />
              <line x1="62" y1="35" x2="62" y2="30" />
              <line x1="38" y1="65" x2="38" y2="70" /><line x1="44" y1="65" x2="44" y2="70" />
              <line x1="50" y1="65" x2="50" y2="70" /><line x1="56" y1="65" x2="56" y2="70" />
              <line x1="62" y1="65" x2="62" y2="70" />
              <line x1="35" y1="38" x2="30" y2="38" /><line x1="35" y1="44" x2="30" y2="44" />
              <line x1="35" y1="50" x2="30" y2="50" /><line x1="35" y1="56" x2="30" y2="56" />
              <line x1="35" y1="62" x2="30" y2="62" />
              <line x1="65" y1="38" x2="70" y2="38" /><line x1="65" y1="44" x2="70" y2="44" />
              <line x1="65" y1="50" x2="70" y2="50" /><line x1="65" y1="56" x2="70" y2="56" />
              <line x1="65" y1="62" x2="70" y2="62" />
            </g>

            <rect x="35" y="35" width="30" height="30" fill="#030a0a" stroke="#45b5e7" strokeWidth="1" />
            <rect x="40" y="40" width="20" height="20" fill="#58b58d" />
          </svg>
        </div>
        
        {/* GRID DOS NÚMEROS */}
        <div className="metricas-grid">
          <div className="metrica">
            <span className="label">❤️ FREQ. CARDÍACA</span>
            <strong className="valor destaque-vermelho">{batimentos} BPM</strong>
          </div>
          <div className="metrica">
            <span className="label">🩸 PRESSÃO ARTERIAL</span>
            <strong className="valor">120/80 mmHg</strong>
          </div>
          <div className="metrica">
            <span className="label">💧 GLICOSE</span>
            <strong className="valor destaque-azul">{glicose} mg/dL</strong>
          </div>
          <div className="metrica">
            <span className="label">💉 INSULINA</span>
            <strong className="valor">12 mUI/L</strong>
          </div>
          <div className="metrica">
            <span className="label">📏 ALTURA</span>
            <strong className="valor">180 cm</strong>
          </div>
          <div className="metrica">
            <span className="label">⚖️ PESO</span>
            <strong className="valor">70 kg</strong>
          </div>
          {/* Hidratação agora em 7º */}
          <div className="metrica">
            <span className="label">🌊 HIDRATAÇÃO</span>
            <strong className="valor destaque-azul">62%</strong>
          </div>
          {/* Gordura Corporal por último (8º) */}
          <div className="metrica">
            <span className="label">⚡ GORDURA CORP.</span>
            <strong className="valor">10%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}