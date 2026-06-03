// LoginModal.jsx
export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Captura os valores digitados nos inputs
    const nomeDigitado = e.target.nomeUsuario.value;
    const emailDigitado = e.target.emailUsuario.value; // Novo campo capturado
    
    // Executa a função enviando o objeto completo
    onLoginSuccess({ nome: nomeDigitado, email: emailDigitado });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose} className="close-icon-button">&times;</button>
        
        <h2 className="modal-title">Acessar Conta</h2>
        <p className="modal-subtitle">Insira seus dados para entrar no Interboock</p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="input-group">
            <label className="input-label">Nome de Usuário</label>
            <input 
              type="text" 
              name="nomeUsuario" 
              placeholder="Digite seu usuário" 
              required 
              className="modal-input" 
            />
          </div>

          <div className="input-group">
            <label className="input-label">E-mail</label>
            {/* Adicionado o atributo name="emailUsuario" */}
            <input 
              type="email" 
              name="emailUsuario" 
              placeholder="seu@email.com" 
              required 
              className="modal-input" 
            />
          </div>

          <div className="input-group">
            <label className="input-label">Senha</label>
            <input type="password" placeholder="Digite sua senha" required className="modal-input" />
          </div>

          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}