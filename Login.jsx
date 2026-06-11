export default function Login({
  fechar,
  cadastrar,
  nome,
  setNome,
  email,
  setEmail,
  cpf,
  setCpf,
  cep,
  setCep,
  convenio,
  setConvenio,
}) {
  return (
    <div className="overlay">
      <div className="janela-login">
        <button className="fechar" onClick={fechar}>
          X
        </button>

        <h2>Cadastro</h2>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
         type="text"
         placeholder="CPF (11 números)"
         maxLength={11}
         value={cpf}
         onChange={(e) =>
         setCpf(
         e.target.value.replace(/\D/g, ""))}
        />

        <input
         type="text"
         placeholder="CEP (8 números)"
         maxLength={8}
         value={cep}
         onChange={(e) => 
         setCep(
         e.target.value.replace(/\D/g, ""))}
        />

       <input
         type="text"
         placeholder="Convênio Médico"
         value={convenio}
         onChange={(e) => setConvenio(e.target.value)}
       />


        <button onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}