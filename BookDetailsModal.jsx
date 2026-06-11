// BookDetailsModal.jsx
export default function BookDetailsModal({ isOpen, onClose, livro, usuario, onOpenLogin }) {
  if (!isOpen || !livro) return null;

  // Função simulada para Aluguer ou Compra (Sem Backend)
  const handleAcaoLivro = (tipoTransacao) => {
    // 1. Bloqueia se o utilizador não estiver logado
    if (!usuario) {
      alert(`Atenção: Você só pode ${tipoTransacao === 'aluguel' ? 'alugar' : 'comprar'} livros se estiver logado na sua conta!`);
      onClose();
      onOpenLogin();
      return;
    }

    // 2. Simula o sucesso da transação direto na tela!
    alert(`Sucesso! Você ${tipoTransacao === 'aluguel' ? 'alugou' : 'comprou'} o livro "${livro.titulo}". Boa leitura!`);
    onClose(); // Fecha o modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box detail-modal-box">
        <button onClick={onClose} className="close-icon-button">&times;</button>
        
        <div className="modal-book-cover">
          <img 
            src={livro.capa} 
            alt={`Capa de ${livro.titulo}`} 
            style={{ height: '100%', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>

        <h2 className="detail-title">{livro.titulo}</h2>
        <span className="detail-badge">{livro.categoria.toUpperCase()}</span>
        
        <p className="detail-description">
          {livro.descricao || `Esta é uma obra completa sobre ${livro.categoria}. Ideal para estudantes, profissionais e entusiastas que buscam aprofundar os seus conhecimentos.`}
        </p>

        <div className="action-buttons-container">
          <button onClick={() => handleAcaoLivro('aluguel')} className="action-btn rent-btn">
            Alugar por <strong>R$ {livro.precoAluguel}</strong>
          </button>
          
          <button onClick={() => handleAcaoLivro('compra')} className="action-btn buy-btn">
            Comprar por <strong>R$ {livro.precoCompra}</strong>
          </button>
        </div>
      </div>
    </div>
  );
}