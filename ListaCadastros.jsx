import React from "react";
import CadastroCard from "./CadastroCard";

export default function ListaCadastros({ lista, excluir }) {
  if (!lista || lista.length === 0) return null;

  return (
    <div className="lista-cadastros">
      <h2>Usuários Monitorados</h2>
      <div className="grid-cards">
        {lista.map((pessoa, index) => (
          <CadastroCard 
            key={index} 
            pessoa={pessoa} 
            excluir={excluir} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}