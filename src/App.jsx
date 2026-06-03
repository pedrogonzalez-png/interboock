// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import BookCard from './BookCard';
import LoginModal from './LoginModal';
import BookDetailsModal from './BookDetailsModal';

export default function App() {
  const [modalAberto, setModalAberto] = useState(false);
  // O utilizador agora é um objeto para guardar nome e e-mail juntos!
  const [usuario, setUsuario] = useState(null); 
  const [pesquisa, setPesquisa] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  // Estados do Servidor
  const [livros, setLivros] = useState([]); 
  const [carregando, setCarregando] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:3000/api/livros')
      .then(resposta => resposta.json()) 
      .then(dados => {
        setLivros(dados); 
        setCarregando(false); 
      })
      .catch(erro => {
        console.error("Erro ao procurar os livros:", erro);
        setCarregando(false);
      });
  }, []); 

  // Ajustado para receber o objeto { nome, email }
  const handleLoginSuccess = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    setModalAberto(false);
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  const livrosFiltrados = livros.filter(livro => {
    const bateTexto = livro.titulo.toLowerCase().includes(pesquisa.toLowerCase());
    const bateCategoria = categoria === 'todos' || livro.categoria === categoria;
    return bateTexto && bateCategoria;
  });

  return (
    <div className="app-container">
      <Header 
        onOpenLogin={() => setModalAberto(true)} 
        usuario={usuario} 
        onLogout={handleLogout}
      />

      <main className="main-content">
        <div className="filter-bar">
          <div className="search-group">
            <input 
              type="text" 
              placeholder="Pesquisar livros por título..." 
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="select-group">
            <select 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos os tipos</option>
              <option value="terror">Terror</option>
              <option value="aventura">Aventura</option>
              <option value="ação">Ação</option>
              <option value="suspense">Suspense</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
            </select>
          </div>
        </div>

        {/* O erro de sintaxe estava aqui e foi corrigido! */}
        <h2 className="section-title">
          Biblioteca Digital 
        </h2>
        
        {carregando ? (
          <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '18px' }}>
            A carregar o acervo do servidor... ⏳
          </p>
        ) : (
          <div className="grid-container">
            {livrosFiltrados.map((livro) => (
               <BookCard 
                 key={livro.id} 
                 livro={livro} 
                 onVerDetalhes={(livroClicado) => setLivroSelecionado(livroClicado)} 
               />
            ))}
            {livrosFiltrados.length === 0 && (
              <p className="no-results">Nenhum livro encontrado para essa busca.</p>
            )}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Interboock. Sua biblioteca digital.</p>
      </footer>

      <LoginModal 
        isOpen={modalAberto} 
        onClose={() => setModalAberto(false)} 
        onLoginSuccess={handleLoginSuccess}
      />

      <BookDetailsModal 
        isOpen={livroSelecionado !== null} 
        onClose={() => setLivroSelecionado(null)} 
        livro={livroSelecionado}
        usuario={usuario}
        onOpenLogin={() => setModalAberto(true)}
      />
    </div>
  );
}