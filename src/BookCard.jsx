// BookCard.jsx
export default function BookCard({ livro, onVerDetalhes }) {
  return (
    <div className="card">
      <div className="card-cover">
        {/* Adiciona a tag img aqui */}
        <img 
          src={livro.capa} 
          alt={`Capa de ${livro.titulo}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
        />
      </div>
      <h3 className="card-title">{livro.titulo}</h3>
      <p className="card-description">Disponível para compra e aluguel na categoria {livro.categoria}.</p>
      
      <button onClick={() => onVerDetalhes(livro)} className="card-button">
        Ver detalhes
      </button>
    </div>
  );
}