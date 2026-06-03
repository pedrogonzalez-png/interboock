// BookDetailsModal.jsx
export default function BookDetailsModal({ isOpen, onClose, livro, usuario, onOpenLogin }) {
  if (!isOpen || !livro) return null;

  // Função única para lidar com Aluguer ou Compra de verdade no Banco de Dados
  const handleAcaoLivro = (tipoTransacao) => {
    // 1. Bloqueia se o utilizador não estiver logado
    if (!usuario) {
      alert(`Atenção: Você só pode ${tipoTransacao === 'aluguel' ? 'alugar' : 'comprar'} livros se estiver logado na sua conta!`);
      onClose();
      onOpenLogin();
      return;
    }

    // 2. Se estiver logado, envia a transação para o Node.js gravar no SQLite
    fetch('http://localhost:3000/api/transacao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario_email: usuario.email, // Agora o e-mail está acessível!
        livro_id: livro.id,
        livro_titulo: livro.titulo,
        tipo: tipoTransacao // 'aluguel' ou 'compra'
      })
    })
    .then(res => res.json())
    .then(dados => {
      if (dados.sucesso) {
        alert(dados.mensagem); // Mostra a mensagem de sucesso que veio do servidor!
        onClose(); // Fecha o modal
      } else {
        alert("Erro: " + dados.mensagem);
      }
    })
    .catch(erro => {
      console.error("Erro na transação:", erro);
      alert("Não foi possível conectar ao servidor.");
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box detail-modal-box">
        <button onClick={onClose} className="close-icon-button">&times;</button>
        
        // Dentro do BookDetailsModal.jsx
        <div className="modal-book-cover">
          {/* Adiciona a tag img aqui */}
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
          {/* Botão Alugar real */}
          <button onClick={() => handleAcaoLivro('aluguel')} className="action-btn rent-btn">
            Alugar por <strong>R$ {livro.precoAluguel}</strong>
          </button>
          
          {/* Botão Comprar real */}
          <button onClick={() => handleAcaoLivro('compra')} className="action-btn buy-btn">
            Comprar por <strong>R$ {livro.precoCompra}</strong>
          </button>
        </div>
      </div>
    </div>
  );
}