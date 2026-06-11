import "./App.css";

import BotaoLogin from "./BotaoLogin";
import Login from "./Login";
import ListaCadastros from "./ListaCadastros";
import useCadastro from "./useCadastro";

// Imagens oficiais importadas
import BioTechSolutions from "./assets/BioTechSolutions.png";
import BIOMONITOR from "./assets/BIOMONITOR.png";
import guloso from "./assets/guloso.png";
import paufoda from "./assets/paufoda.png";
import merda from "./assets/masqueporraem.jpg";

export default function App() {
  const cadastro = useCadastro();

  // Verifica se existe algum cliente cadastrado
  const temCadastro = cadastro.cadastradosLista && cadastro.cadastradosLista.length > 0;

  return (
    <>
      {/* =========================================
          1. BACKGROUNDS E VETORES FIXOS
      ========================================= */}
      <div className="hex-background">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="60" height="103.9" patternUnits="userSpaceOnUse">
              <path d="M 30,0 L 60,17.32 L 60,51.96 L 30,69.28 L 0,51.96 L 0,17.32 Z" fill="none" stroke="rgba(88,181,141,0.15)" strokeWidth="1" />
              <path d="M 30,103.92 L 60,86.6 L 60,51.96 L 30,34.64 L 0,51.96 L 0,86.6 Z" fill="none" stroke="rgba(69,181,231,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      <div className="circuito-decorativo circuito-top-left"></div>
      <div className="circuito-decorativo circuito-bottom-right"></div>

      {/* =========================================
          2. CABEÇALHO
      ========================================= */}
      <header>
        <div className="logo-placeholder">
          <img src={BioTechSolutions} alt="BioTech Solutions Logo" className="logo-img" />
        </div>
        <BotaoLogin abrir={() => cadastro.setMostrarLogin(true)} />
      </header>

      {/* =========================================
          3. ESTRUTURA CENTRAL (BENTO GRID)
      ========================================= */}
      <main className="painel-central">
        
        {/* INTRO HERO */}
        <section className="intro-sistema">
          <div className="badge-tech">SISTEMA BIO-TELEMETRIA ONLINE</div>
          <h1 className="titulo-principal">BIOMONITOR ADVANCED</h1>
          <p>Arquitetura de telemetria médica e processamento de dados em tempo real.</p>
        </section>

        {/* QUADRO EM GRID ASSIMÉTRICO */}
        <section className="grid-assimetrico">
          
          {/* Módulo Destaque (2x2) - Performance Geral */}
          <div className="modulo modulo-destaque span-2x2">
            <div className="modulo-conteudo">
              <span className="modulo-tag">HARDWARE CORE</span>
              <h2>Performance Absoluta</h2>
              <p>
                A sincronização perfeita entre o hardware de captação e o painel de leitura. 
                Com acesso rápido ao histórico de medições, equipes médicas tomam decisões ágeis e precisas.
              </p>
              <img src={BIOMONITOR} alt="Monitoramento Core" className="imagem-fundo" />
            </div>
          </div>

          {/* MÓDULO EM SUBSTITUIÇÃO DINÂMICA (1x2) */}
          {temCadastro ? (
            /* CASO EXISTA CADASTRO: Renderiza os dados do cliente no mesmo bloco do grid */
            <div className="modulo modulo-vertical span-1x2 modulo-paciente-grid">
              <ListaCadastros 
                lista={cadastro.cadastradosLista} 
                excluir={cadastro.excluirCadastro} 
              />
            </div>
          ) : (
            /* CASO NÃO EXISTA CADASTRO: Mantém o painel padrão de Módulos Ativos */
            <div className="modulo modulo-vertical span-1x2">
              <span className="modulo-tag">TELEMETRIA ACTIVE</span>
              <h2>Módulos<br/>Ativos</h2>
              <p>Sensores biométricos em monitoramento constante.</p>
              <div className="status-lista">
                <span className="item-sensor">❤️ FREQ. CARDÍACA</span>
                <span className="item-sensor">🩸 PRESSÃO ARTERIAL</span>
                <span className="item-sensor">💧 GLICOSE QUÂNTICA</span>
                <span className="item-sensor">🌊 HIDRATAÇÃO </span>
                <span className="item-sensor">⚖️ PESO </span>
                <span className="item-sensor">⚡ GORDURA CORP </span>
              </div>
            </div>
          )}

          {/* Módulo Compacto - Status da Rede */}
          <div className="modulo modulo-status">
            <span className="status-label">LATÊNCIA GLOBAL</span>
            <strong className="status-valor">0.4 ms</strong>
            <span className="status-sub">Sincronização Estável</span>
          </div>

          {/* Módulo Largo Horizontal (2x1) - Integração Neural */}
          <div className="modulo modulo-info span-2x1">
            <div className="modulo-conteudo-horizontal">
              <div className="texto-horizontal">
                <span className="modulo-tag">PREVENÇÃO</span>
                <h2>Integração Médica</h2>
                <p>
                  O BIOMONITOR aumenta a prevenção, otimiza a comunicação e reduz drasticamente 
                  custos operacionais evitando internamentos desnecessários.
                </p>
              </div>
              <div className="wrapper-imagem-lado">
                <img src={guloso} alt="Gráfico Operacional" className="imagem-lado" />
              </div>
            </div>
          </div>

          {/* Módulo Custom - Público Alvo */}
          <div className="modulo modulo-secundario">
            <span className="modulo-tag">ALVO MIGRADO</span>
            <h3>Público Estratégico</h3>
            <p>Desenhado sob medida para cardiopatas, diabéticos, seniores e clínicas integradas.</p>
            <img src={paufoda} alt="Tecnologia Médica" className="imagem-fundo opacity-low" />
          </div>

          {/* Módulo Banner Final (2x1) - Nó Centralizado */}
          <div className="modulo modulo-banner span-2x1">
            <div className="modulo-conteudo">
              <span className="modulo-tag">CONEXÃO SEGURA</span>
              <h3>Nó de Dados Centralizado</h3>
              <p>Segurança ponta a ponta integrada nativamente com operadoras de saúde e hospitais.</p>
              <img src={merda} alt="Rede de Saúde Conectada" className="imagem-fundo" />
            </div>
          </div>

        </section>

      </main>

      {/* =========================================
          4. JANELA MODAL DE LOGIN/CADASTRO
      ========================================= */}
      {cadastro.mostrarLogin && (
        <Login
          fechar={() => cadastro.setMostrarLogin(false)}
          cadastrar={cadastro.cadastrar}
          nome={cadastro.nome}
          setNome={cadastro.setNome}
          email={cadastro.email}
          setEmail={cadastro.setEmail}
          cpf={cadastro.cpf}
          setCpf={cadastro.setCpf}
          cep={cadastro.cep}
          setCep={cadastro.setCep}
          convenio={cadastro.convenio}
          setConvenio={cadastro.setConvenio}
        />
      )}

      {/* =========================================
          5. RODAPÉ
      ========================================= */}
      <footer>
        <p>&copy; 2026 BioTech Solutions — Monitorando vidas, protegendo o futuro.</p>
      </footer>
    </>
  );
}