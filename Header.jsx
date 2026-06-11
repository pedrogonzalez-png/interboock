// Header.jsx
import logoImagem from './assets/logo.png'; // ← Altera o nome do ficheiro aqui se for preciso (.png, .svg)

export default function Header({ onOpenLogin, usuario, onLogout }) {
  return (
    <header className="header">
      
      {/* 1. JUNTÁMOS A IMAGEM E O NOME AQUI NESTA DIV */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src={logoImagem} 
          alt="Logo Interboock" 
          style={{ width: '45px', height: 'auto' }} // ← Podes aumentar ou diminuir o tamanho aqui
        />
        <div className="logo" style={{ margin: 0 }}>Interboock</div>
      </div>
      
      {/* 2. O RESTO FICA IGUAL */}
      <div>
        {usuario ? (
          <div className="user-logged-container">
            <span className="user-welcome">Olá, <strong>{usuario?.nome}</strong></span>
            <button onClick={onLogout} className="logout-button">Sair</button>
          </div>
        ) : (
          <button type="button" onClick={onOpenLogin} className="login-button">
            Fazer Login
          </button>
        )}
      </div>
      
    </header>
  );
}