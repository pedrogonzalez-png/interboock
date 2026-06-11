import { useState } from "react";

export default function useCadastro() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [cadastradosLista, setCadastradosLista] = useState([]); // Array para salvar a galera

  // Dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [convenio, setConvenio] = useState("");

  const [cadastrado, setCadastrado] = useState(false);

  function cadastrar() {
    if (nome.trim() === "") return alert("Preencha o nome.");
    if (!email.includes("@") || !email.includes(".")) return alert("Digite um e-mail válido.");
    if (cpf.length !== 11 || isNaN(cpf)) return alert("CPF inválido.");
    if (cep.length !== 8 || isNaN(cep)) return alert("CEP inválido.");
    if (convenio.trim() === "") return alert("Informe o convênio médico.");

    // Salva o novo usuário na lista
    const novoUsuario = { nome, email, cpf, cep, convenio };
    setCadastradosLista([...cadastradosLista, novoUsuario]);

    // Mostra mensagem de sucesso e apaga após 3 segundos
    setCadastrado(true);
    setTimeout(() => setCadastrado(false), 3000);

    // Limpa formulário
    setNome("");
    setEmail("");
    setCpf("");
    setCep("");
    setConvenio("");
    setMostrarLogin(false);
  }

  function excluirCadastro(index) {
    const novaLista = cadastradosLista.filter((_, i) => i !== index);
    setCadastradosLista(novaLista);
  }

  return {
    mostrarLogin, setMostrarLogin,
    nome, setNome,
    email, setEmail,
    cpf, setCpf,
    cep, setCep,
    convenio, setConvenio,
    cadastrado, cadastrar,
    cadastradosLista, excluirCadastro // Retornando as novas funções
  };
}