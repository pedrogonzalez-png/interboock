// App.jsx
import { useState } from 'react';
import './App.css';
import Header from './Header';
import BookCard from './BookCard';
import LoginModal from './LoginModal';
import BookDetailsModal from './BookDetailsModal';

export default function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [usuario, setUsuario] = useState(null); 
  const [pesquisa, setPesquisa] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  // Aqui está o truque! Em vez de vazio, já começamos com a lista pronta:
  const [livros] = useState([
   {
    id: 1,
    titulo: "It: A Coisa",
    categoria: "terror",
    precoCompra: "69,90",
    precoAluguel: "14,90",
    descricao: "Na pacata cidade de Derry, no Maine, sete amigos enfrentam uma força maligna que assume a forma de um palhaço assustador chamado Pennywise.",
    capa: "https://covers.openlibrary.org/b/isbn/9780450411434-L.jpg"
  },
  {
    id: 2,
    titulo: "O Iluminado",
    categoria: "terror",
    precoCompra: "55,00",
    precoAluguel: "12,00",
    descricao: "Jack Torrance aceita o emprego de zelador de inverno do isolado Hotel Overlook, mas forças sinistras no local começam a afetar a sua sanidade.",
    capa: "https://covers.openlibrary.org/b/isbn/9780450040184-L.jpg"
  },
  {
    id: 3,
    titulo: "Drácula",
    categoria: "terror",
    precoCompra: "39,90",
    precoAluguel: "9,90",
    descricao: "O clássico de Bram Stoker que define o mito dos vampiros. O advogado Jonathan Harker viaja até a Transilvânia para conhecer um misterioso conde.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg"
  },
  {
    id: 4,
    titulo: "Frankenstein",
    categoria: "terror",
    precoCompra: "35,90",
    precoAluguel: "8,90",
    descricao: "O cientista Victor Frankenstein desafia as leis da natureza e cria vida a partir de restos humanos, mas abandona a sua criatura à própria sorte.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg"
  },

  // ---------------- AVENTURA ----------------
  {
    id: 5,
    titulo: "Harry Potter e a Pedra Filosofal",
    categoria: "aventura",
    precoCompra: "45,90",
    precoAluguel: "10,90",
    descricao: "Um menino órfão descobre que é um bruxo e vai estudar na Escola de Magia e Bruxaria de Hogwarts, onde desvenda um mistério perigoso.",
    capa: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg"
  },
  {
    id: 6,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    categoria: "aventura",
    precoCompra: "79,90",
    precoAluguel: "15,90",
    descricao: "O hobbit Frodo Bolseiro recebe a missão épica de destruir um anel mágico antes que o Senhor do Escuro o recupere para dominar a Terra Média.",
    capa: "https://covers.openlibrary.org/b/isbn/9780261102354-L.jpg"
  },
  {
    id: 7,
    titulo: "O Hobbit",
    categoria: "aventura",
    precoCompra: "49,90",
    precoAluguel: "11,90",
    descricao: "Bilbo Bolseiro vive uma vida pacata até que o mago Gandalf e um grupo de anões o convidam para uma expedição para recuperar um tesouro guardado por um dragão.",
    capa: "https://m.media-amazon.com/images/I/91M9xPIf10L._SY466_.jpg"
  },
  {
    id: 8,
    titulo: "Percy Jackson e o Ladrão de Raios",
    categoria: "aventura",
    precoCompra: "42,00",
    precoAluguel: "10,00",
    descricao: "Um adolescente comum descobre ser filho do deus grego Poseidon e precisa encontrar o raio de Zeus roubado para evitar uma guerra entre os deuses.",
    capa: "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg"
  },

  // ---------------- AÇÃO ----------------
  {
    id: 9,
    titulo: "Jogos Vorazes",
    categoria: "ação",
    precoCompra: "44,90",
    precoAluguel: "10,50",
    descricao: "Num futuro distópico, Katniss Everdeen voluntaria-se para participar num torneio mortal na televisão onde apenas um jovem pode sair com vida.",
    capa: "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg"
  },
  {
    id: 10,
    titulo: "A Identidade Bourne",
    categoria: "ação",
    precoCompra: "52,90",
    precoAluguel: "12,50",
    descricao: "Um homem é resgatado do mar sem memórias, mas descobre que possui habilidades de combate letais e que está sendo caçado por assassinos profissionais.",
    capa: "https://m.media-amazon.com/images/I/71u2imwk4HL._SY522_.jpg"
  },
  {
    id: 11,
    titulo: "O Código Da Vinci",
    categoria: "ação",
    precoCompra: "48,50",
    precoAluguel: "11,00",
    descricao: "O simbologista Robert Langdon envolve-se numa perseguição eletrizante por Paris e Londres para desvendar um segredo guardado por uma sociedade secreta.",
    capa: "https://covers.openlibrary.org/b/isbn/9780385504201-L.jpg"
  },
  {
    id: 12,
    titulo: "Jurassic Park",
    categoria: "ação",
    precoCompra: "58,00",
    precoAluguel: "13,90",
    descricao: "Cientistas conseguem recriar dinossauros através da genética para um parque temático, mas os sistemas de segurança falham, resultando em puro caos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345370778-L.jpg"
  },

  // ---------------- SUSPENSE ----------------
  {
    id: 13,
    titulo: "Garota Exemplar",
    categoria: "suspense",
    precoCompra: "49,90",
    precoAluguel: "11,50",
    descricao: "No dia do seu quinto aniversário de casamento, Amy desaparece. À medida que as investigações avançam, o marido Nick torna-se o principal suspeito.",
    capa: "https://covers.openlibrary.org/b/isbn/9780307588364-L.jpg"
  },
  {
    id: 14,
    titulo: "A Garota no Trem",
    categoria: "suspense",
    precoCompra: "41,00",
    precoAluguel: "9,90",
    descricao: "Rachel apanha o comboio todos os dias e observa um casal da janela. Um dia, ela testemunha algo perturbador que a atira para o meio de uma investigação criminal.",
    capa: "https://covers.openlibrary.org/b/isbn/9781594634024-L.jpg"
  },
  {
    id: 15,
    titulo: "O Silêncio dos Inocentes",
    categoria: "suspense",
    precoCompra: "55,90",
    precoAluguel: "12,90",
    descricao: "A agente do FBI Clarice Starling procura a ajuda do brilhante psicopata e canibal Dr. Hannibal Lecter para capturar um assassino em série à solta.",
    capa: "https://covers.openlibrary.org/b/isbn/9780312924584-L.jpg"
  },
  {
    id: 16,
    titulo: "Os Homens que Não Amavam as Mulheres",
    categoria: "suspense",
    precoCompra: "59,90",
    precoAluguel: "13,50",
    descricao: "Um jornalista em desgraça e uma hacker genial unem forças para investigar o desaparecimento de uma herdeira há mais de quarenta anos na Suécia.",
    capa: "https://covers.openlibrary.org/b/isbn/9780307269751-L.jpg"
  },

  // ---------------- ROMANCE ----------------
  {
    id: 17,
    titulo: "Orgulho e Preconceito",
    categoria: "romance",
    precoCompra: "34,90",
    precoAluguel: "8,50",
    descricao: "A história clássica e envolvente de Elizabeth Bennet e do arrogante mas charmoso Sr. Darcy, que precisam ultrapassar o orgulho para ficarem juntos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
  },
  {
    id: 18,
    titulo: "A Culpa é das Estrelas",
    categoria: "romance",
    precoCompra: "39,00",
    precoAluguel: "9,50",
    descricao: "Dois adolescentes que se conhecem num grupo de apoio para pacientes com cancro apaixonam-se e partem numa jornada emocionante e transformadora.",
    capa: "https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg"
  },
  {
    id: 19,
    titulo: "Como Eu Era Antes de Você",
    categoria: "romance",
    precoCompra: "43,90",
    precoAluguel: "10,90",
    descricao: "Uma jovem tagarela e otimista aceita um emprego a cuidar de um ex-banqueiro cínico e tetraplégico, e as suas vidas mudam para sempre.",
    capa: "https://covers.openlibrary.org/b/isbn/9780670026609-L.jpg"
  },
  {
    id: 20,
    titulo: "O Diário de uma Paixão",
    categoria: "romance",
    precoCompra: "36,90",
    precoAluguel: "8,90",
    descricao: "Um homem idoso lê a história de dois jovens de classes sociais diferentes que se apaixonaram perdidamente no verão, a partir de um caderno gasto.",
    capa: "https://m.media-amazon.com/images/S/pv-target-images/e46417559054417d408881056c768e625399ef697188fe9a9a540e2dcb94e5ad.jpg"
  },

  // ---------------- SCI-FI ----------------
  {
    id: 21,
    titulo: "Duna",
    categoria: "sci-fi",
    precoCompra: "74,90",
    precoAluguel: "15,00",
    descricao: "No planeta desértico de Arrakis, o jovem Paul Atreides tem de navegar numa complexa teia de política e traição para garantir o futuro da sua família e do seu povo.",
    capa: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg"
  },
  {
    id: 22,
    titulo: "1984",
    categoria: "sci-fi",
    precoCompra: "42,00",
    precoAluguel: "9,90",
    descricao: "O mundo é dominado por um regime totalitário onde o 'Grande Irmão' tudo vê e Winston Smith decide rebelar-se contra o sistema em busca da verdade e da liberdade.",
    capa: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  },
  {
    id: 23,
    titulo: "O Guia do Mochileiro das Galáxias",
    categoria: "sci-fi",
    precoCompra: "38,50",
    precoAluguel: "8,50",
    descricao: "A Terra é destruída para dar lugar a uma via expressa espacial e o humano Arthur Dent embarca na aventura mais louca e engraçada do universo.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345391803-L.jpg"
  },
  {
    id: 24,
    titulo: "Fahrenheit 451",
    categoria: "sci-fi",
    precoCompra: "39,90",
    precoAluguel: "9,00",
    descricao: "Numa sociedade onde os livros são proibidos e a televisão aliena as mentes, a função dos 'bombeiros' não é apagar incêndios, mas sim queimar livros.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345342966-L.jpg"
  },
  {
    id: 25,
    titulo: "O Exorcista",
    categoria: "terror",
    precoCompra: "49,90",
    precoAluguel: "11,90",
    descricao: "O clássico perturbador de William Peter Blatty sobre a possessão demoníaca de uma jovem de doze anos e a tentativa desesperada de dois padres para salvá-la.",
    capa: "https://covers.openlibrary.org/b/isbn/9780061007224-L.jpg"
  },
  {
    id: 26,
    titulo: "A Assombração da Casa da Colina",
    categoria: "terror",
    precoCompra: "39,90",
    precoAluguel: "9,00",
    descricao: "Quatro pessoas chegam a uma casa notoriamente conhecida por seus fenômenos paranormais, desencadeando um terror psicológico sufocante.",
    capa: "https://covers.openlibrary.org/b/isbn/9780143039983-L.jpg"
  },
  {
    id: 27,
    titulo: "Misery: Louca Obsessão",
    categoria: "terror",
    precoCompra: "54,90",
    precoAluguel: "12,00",
    descricao: "Um famoso escritor sofre um grave acidente de carro e é resgatado por sua fã número um, que rapidamente se transforma em sua pior carcereira.",
    capa: "https://m.media-amazon.com/images/I/91ocgbfq55L._SY425_.jpg"
  },
  {
    id: 28,
    titulo: "O Cemitério",
    categoria: "terror",
    precoCompra: "58,00",
    precoAluguel: "13,50",
    descricao: "A família Creed muda-se para uma nova casa no Maine, perto de um antigo cemitério de animais que esconde um poder antigo capaz de trazer os mortos de volta.",
    capa: "https://covers.openlibrary.org/b/isbn/9780450057694-L.jpg"
  },
  {
    id: 29,
    titulo: "O Bebê de Rosemary",
    categoria: "terror",
    precoCompra: "46,00",
    precoAluguel: "10,00",
    descricao: "Um jovem casal muda-se para um prédio com vizinhos excêntricos. Quando Rosemary engravida, começa a suspeitar que há uma conspiração satânica ao seu redor.",
    capa: "https://covers.openlibrary.org/b/isbn/9780451163486-L.jpg"
  },
  {
    id: 30,
    titulo: "Histórias Extraordinárias",
    categoria: "terror",
    precoCompra: "35,00",
    precoAluguel: "7,90",
    descricao: "A antologia definitiva dos contos góticos de Edgar Allan Poe, incluindo 'O Gato Preto', 'O Coração Delator' e 'A Queda da Casa de Usher'.",
    capa: "https://m.media-amazon.com/images/I/91gBx+PJIoL._SY466_.jpg"
  },

  // ---------------- AVENTURA (Continuação) ----------------
  {
    id: 31,
    titulo: "As Crônicas de Nárnia",
    categoria: "aventura",
    precoCompra: "89,90",
    precoAluguel: "18,90",
    descricao: "Quatro irmãos entram através de um guarda-roupa num mundo mágico congelado pelo feitiço da Feiticeira Branca e precisam lutar ao lado do leão Aslan.",
    capa: "https://covers.openlibrary.org/b/isbn/9780066238500-L.jpg"
  },
  {
    id: 32,
    titulo: "A Ilha do Tesouro",
    categoria: "aventura",
    precoCompra: "32,90",
    precoAluguel: "7,50",
    descricao: "O jovem Jim Hawkins encontra o mapa de um tesouro pirata lendário e embarca numa viagem perigosa cheia de motins e traições lideradas por Long John Silver.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141321004-L.jpg"
  },
  {
    id: 33,
    titulo: "Vinte Mil Léguas Submarinas",
    categoria: "aventura",
    precoCompra: "39,90",
    precoAluguel: "8,90",
    descricao: "O Capitão Nemo cruza os oceanos do mundo a bordo do seu super-submarino Nautilus, desbravando segredos ocultos das profundezas do mar.",
    capa: "https://covers.openlibrary.org/b/isbn/9780140390537-L.jpg"
  },
  {
    id: 34,
    titulo: "A Volta ao Mundo em 80 Dias",
    categoria: "aventura",
    precoCompra: "38,00",
    precoAluguel: "8,00",
    descricao: "O cavalheiro inglês Phileas Fogg aposta toda a sua fortuna que consegue dar a volta ao globo terrestre em apenas oitenta dias usando os transportes da era vitoriana.",
    capa: "https://covers.openlibrary.org/b/isbn/9780140449068-L.jpg"
  },
  {
    id: 35,
    titulo: "O Chamado da Floresta",
    categoria: "aventura",
    precoCompra: "29,90",
    precoAluguel: "6,90",
    descricao: "A emocionante jornada do cão Buck, que é roubado da sua vida confortável na Califórnia e levado para o Alasca selvagem para se tornar um cão de trenó.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141321042-L.jpg"
  },
  {
    id: 36,
    titulo: "As Aventuras de Tom Sawyer",
    categoria: "aventura",
    precoCompra: "34,00",
    precoAluguel: "7,00",
    descricao: "A infância mágica e rebelde de Tom Sawyer e do seu amigo Huckleberry Finn às margens do rio Mississippi, repleta de travessuras e mistérios.",
    capa: "https://covers.openlibrary.org/b/isbn/9780143039563-L.jpg"
  },

  // ---------------- AÇÃO (Continuação) ----------------
  {
    id: 37,
    titulo: "Falcão Negro em Perigo",
    categoria: "ação",
    precoCompra: "49,00",
    precoAluguel: "11,00",
    descricao: "O relato real e eletrizante sobre a batalha campal que soldados de elite americanos enfrentaram nas ruas de Mogadíscio após a queda de dois helicópteros.",
    capa: "https://covers.openlibrary.org/b/isbn/9780871137388-L.jpg"
  },
  {
    id: 38,
    titulo: "Estação Ice Station",
    categoria: "ação",
    precoCompra: "45,00",
    precoAluguel: "10,00",
    descricao: "Uma equipa de fuzileiros navais é enviada para uma estação de pesquisa na Antártida após a descoberta de uma nave espacial antiga sob o gelo.",
    capa: "https://covers.openlibrary.org/b/isbn/9780312969967-L.jpg"
  },
  {
    id: 39,
    titulo: "Caçada ao Outubro Vermelho",
    categoria: "ação",
    precoCompra: "55,00",
    precoAluguel: "12,90",
    descricao: "Um capitão soviético decide desertar e levar consigo o submarino nuclear mais avançado do mundo, iniciando um jogo de xadrez tático mortal nos oceanos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780870212857-L.jpg"
  },
  {
    id: 40,
    titulo: "Sniper Americano",
    categoria: "ação",
    precoCompra: "48,00",
    precoAluguel: "11,50",
    descricao: "A autobiografia de Chris Kyle, o atirador especial mais letal da história das forças armadas americanas, detalhando os seus combates no Iraque.",
    capa: "https://covers.openlibrary.org/b/isbn/9780062238863-L.jpg"
  },
  {
    id: 41,
    titulo: "Duro de Matar",
    categoria: "ação",
    precoCompra: "42,90",
    precoAluguel: "9,90",
    descricao: "O livro original que inspirou o filme. Um detetive reformado visita a filha no escritório dela na véspera de Natal, quando o prédio é tomado por terroristas implacáveis.",
    capa: "https://covers.openlibrary.org/b/isbn/9781935169185-L.jpg"
  },
  {
    id: 42,
    titulo: "Sem Remorso",
    categoria: "ação",
    precoCompra: "52,00",
    precoAluguel: "12,00",
    descricao: "John Kelly, um ex-membro dos SEALs, inicia uma violenta guerra de um homem só contra os barões da droga que assassinaram a mulher que ele amava.",
    capa: "https://covers.openlibrary.org/b/isbn/9780425143322-L.jpg"
  },

  // ---------------- SUSPENSE (Continuação) ----------------
  {
    id: 43,
    titulo: "E Não Sobrou Nenhum",
    categoria: "suspense",
    precoCompra: "39,90",
    precoAluguel: "9,50",
    descricao: "Dez estranhos são convidados por um anfitrião misterioso para uma ilha deserta. Um a um, eles começam a ser assassinados de acordo com uma antiga cantiga infantil.",
    capa: "https://covers.openlibrary.org/b/isbn/9780007136834-L.jpg"
  },
  {
    id: 44,
    titulo: "Assassinato no Expresso do Oriente",
    categoria: "suspense",
    precoCompra: "38,50",
    precoAluguel: "9,00",
    descricao: "Um luxuoso comboio fica preso na neve e um passageiro rico é assassinado. O detetive Hercule Poirot precisa de descobrir o culpado entre os suspeitos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780007119318-L.jpg"
  },
  {
    id: 45,
    titulo: "Um Estudo em Vermelho",
    categoria: "suspense",
    precoCompra: "32,00",
    precoAluguel: "7,50",
    descricao: "A obra imortal de Arthur Conan Doyle que apresenta ao mundo o detetive consultor Sherlock Holmes e o seu fiel parceiro, o Dr. John Watson.",
    capa: "https://m.media-amazon.com/images/I/91gBx+PJIoL._SY466_.jpg"
  },
  {
    id: 46,
    titulo: "Anjos e Demônios",
    categoria: "suspense",
    precoCompra: "49,90",
    precoAluguel: "11,00",
    descricao: "Robert Langdon viaja para o Vaticano para impedir que uma antiga irmandade secreta conhecida como Illuminati destrua a Igreja usando uma arma tecnológica.",
    capa: "https://covers.openlibrary.org/b/isbn/9780671027360-L.jpg"
  },
  {
    id: 47,
    titulo: "O Colecionador",
    categoria: "suspense",
    precoCompra: "44,00",
    precoAluguel: "10,50",
    descricao: "Um jovem solitário ganha a lotaria e decide raptar uma estudante de arte por quem é obcecado, mantendo-a presa numa cave preparada especialmente para ela.",
    capa: "https://covers.openlibrary.org/b/isbn/9780316290968-L.jpg"
  },
  {
    id: 48,
    titulo: "A Mulher na Janela",
    categoria: "suspense",
    precoCompra: "41,90",
    precoAluguel: "9,90",
    descricao: "Anna Fox vive isolada devido à agorafobia e passa os dias a espiar os vizinhos. Um dia, vê algo horrível acontecer na casa da frente, mas ninguém acredita nela.",
    capa: "https://covers.openlibrary.org/b/isbn/9780062678416-L.jpg"
  },

  // ---------------- ROMANCE (Continuação) ----------------
  {
    id: 49,
    titulo: "Amor & Gelato",
    categoria: "romance",
    precoCompra: "39,90",
    precoAluguel: "9,00",
    descricao: "Lina viaja para a Itália para realizar o último desejo da sua mãe. Lá, descobre um antigo diário que a guiará por segredos do passado e novos amores na bela Florença.",
    capa: "https://covers.openlibrary.org/b/isbn/9781481432542-L.jpg"
  },
  {
    id: 50,
    titulo: "Um Amor para Recordar",
    categoria: "romance",
    precoCompra: "36,00",
    precoAluguel: "8,50",
    descricao: "Landon Carter é um jovem rebelde que se apaixona por Jamie Sullivan, a filha do pastor local. Uma história tocante sobre amadurecimento e o poder do amor verdadeiro.",
    capa: "https://covers.openlibrary.org/b/isbn/9780446693806-L.jpg"
  },
  {
    id: 51,
    titulo: "O Morro dos Ventos Uivantes",
    categoria: "romance",
    precoCompra: "34,90",
    precoAluguel: "8,00",
    descricao: "A trágica e intensa paixão entre Heathcliff e Catherine Earnshaw nas charnecas desoladas de Yorkshire, uma história marcada pelo rancor e pela vingança.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg"
  },
  {
    id: 52,
    titulo: "Razão e Sensibilidade",
    categoria: "romance",
    precoCompra: "35,00",
    precoAluguel: "8,00",
    descricao: "As irmãs Elinor e Marianne Dashwood lidam de formas completamente diferentes com as dores do amor e as restrições financeiras da sociedade agrária inglesa.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439662-L.jpg"
  },
  {
    id: 53,
    titulo: "Teto Para Dois",
    categoria: "romance",
    precoCompra: "45,00",
    precoAluguel: "10,90",
    descricao: "Para pouparem dinheiro, dois estranhos decidem partilhar o mesmo apartamento e a mesma cama, mas em horários diferentes. A comunicação é feita apenas por bilhetes.",
    capa: "https://covers.openlibrary.org/b/isbn/9781250205933-L.jpg"
  },
  {
    id: 54,
    titulo: "É Assim Que Acaba",
    categoria: "romance",
    precoCompra: "49,90",
    precoAluguel: "11,90",
    descricao: "Lily Bloom constrói uma vida nova em Boston e apaixona-se por um neurocirurgião brilhante, mas atitudes do passado fazem-na questionar os limites do amor.",
    capa: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg"
  },

  // ---------------- SCI-FI (Continuação) ----------------
  {
    id: 55,
    titulo: "Neuromancer",
    categoria: "sci-fi",
    precoCompra: "59,90",
    precoAluguel: "13,00",
    descricao: "A obra-prima cyberpunk de William Gibson sobre Case, um hacker informático caído em desgraça que é contratado para uma última missão no ciberespaço.",
    capa: "https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg"
  },
  {
    id: 56,
    titulo: "Blade Runner",
    categoria: "sci-fi",
    precoCompra: "46,00",
    precoAluguel: "10,50",
    descricao: "Num futuro pós-apocalíptico e decadente, o caçador de recompensas Rick Deckard é incumbido de localizar e 'aposentar' seis androides rebeldes infiltrados na Terra.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345350473-L.jpg"
  },
  {
    id: 57,
    titulo: "Fundação",
    categoria: "sci-fi",
    precoCompra: "54,00",
    precoAluguel: "12,00",
    descricao: "O cientista Hari Seldon prevê matematicamente a queda do Império Galáctico e cria a Fundação para preservar o conhecimento humano e guiar o futuro do universo.",
    capa: "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg"
  },
  {
    id: 58,
    titulo: "Perdido em Marte",
    categoria: "sci-fi",
    precoCompra: "48,90",
    precoAluguel: "11,00",
    descricao: "Após uma tempestade de areia, o astronauta Mark Watney é dado como morto e abandonado pela tripulação em Marte. Ele precisará de usar a ciência para sobreviver.",
    capa: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg"
  },
  {
    id: 59,
    titulo: "O Homem do Castelo Alto",
    categoria: "sci-fi",
    precoCompra: "42,50",
    precoAluguel: "9,90",
    descricao: "Uma realidade alternativa assustadora onde as forças do Eixo (Alemanha Nazi e Japão) ganharam a Segunda Guerra Mundial e dividiram o território dos Estados Unidos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780679740674-L.jpg"
  },
  {
    id: 60,
    titulo: "Jogador Número Um",
    categoria: "sci-fi",
    precoCompra: "47,00",
    precoAluguel: "10,90",
    descricao: "Em 2045, as pessoas fogem da miséria conectando-se ao OASIS, um universo virtual utópico. O jovem Wade Watts descobre a primeira pista de uma caça ao tesouro milionária lá dentro.",
    capa: "https://covers.openlibrary.org/b/isbn/9780307887436-L.jpg"
  },
  
  {
    id: 61,
    titulo: "O Chamado de Cthulhu",
    categoria: "terror",
    precoCompra: "34,90",
    precoAluguel: "7,50",
    descricao: "A obra-prima de H.P. Lovecraft que introduz o horror cósmico, onde divindades antigas e monstruosas adormecidas ameaçam a sanidade da humanidade.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345350800-L.jpg"
  },
  {
    id: 62,
    titulo: "Cujo",
    categoria: "terror",
    precoCompra: "49,90",
    precoAluguel: "11,00",
    descricao: "Um dócil cão da raça São-Bernardo é mordido por um morcego raivoso e transforma-se numa máquina de matar implacável, encurralando uma mãe e o seu filho.",
    capa: "https://m.media-amazon.com/images/I/91taBwU9wmL._SY466_.jpg"
  },
  {
    id: 63,
    titulo: "A Hora do Lobisomem",
    categoria: "terror",
    precoCompra: "42,00",
    precoAluguel: "9,90",
    descricao: "Quando a lua cheia brilha sobre a pequena cidade de Tarker's Mills, assassinatos brutais começam a acontecer e um menino numa cadeira de rodas descobre o culpado.",
    capa: "https://m.media-amazon.com/images/I/71CjMNDu3WL._SY466_.jpg"
  },
  {
    id: 64,
    titulo: "Hellraiser: O Coração Condenado",
    categoria: "terror",
    precoCompra: "39,90",
    precoAluguel: "8,90",
    descricao: "Frank Cotton resolve um enigma milenar usando uma caixa misteriosa e abre os portões de uma dimensão de prazer e dor extremos governada pelos Cenobitas.",
    capa: "https://covers.openlibrary.org/b/isbn/9780061452888-L.jpg"
  },
  {
    id: 65,
    titulo: "O Fantasma da Ópera",
    categoria: "terror",
    precoCompra: "36,00",
    precoAluguel: "7,90",
    descricao: "Nos labirintos sombrios sob a Ópera de Paris, uma figura mascarada e deformada vive secretamente, desenvolvendo uma obsessão doentia por uma jovem cantora.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141191591-L.jpg"
  },
  {
    id: 66,
    titulo: "Carrie, a Estranha",
    categoria: "terror",
    precoCompra: "44,90",
    precoAluguel: "10,00",
    descricao: "Uma jovem tímida e humilhada pelos colegas de escola descobre que possui poderes telecinéticos perigosos, desencadeando uma vingança sangrenta no baile de finalistas.",
    capa: "https://covers.openlibrary.org/b/isbn/9780450025983-L.jpg"
  },
  {
    id: 67,
    titulo: "Livros de Sangue",
    categoria: "terror",
    precoCompra: "48,00",
    precoAluguel: "11,50",
    descricao: "A famosa coletânea de contos de Clive Barker que redefiniu o horror moderno, misturando o visceral, o macabro e o poético numa jornada inesquecível.",
    capa: "https://covers.openlibrary.org/b/isbn/9780425165584-L.jpg"
  },

  // ---------------- AVENTURA (Final) ----------------
  {
    id: 68,
    titulo: "As Minas do Rei Salomão",
    categoria: "aventura",
    precoCompra: "32,90",
    precoAluguel: "7,00",
    descricao: "O caçador Allan Quatermain lidera uma expedição perigosa por regiões inexploradas de África em busca de um homem desaparecido e de minas de diamantes lendárias.",
    capa: "https://covers.openlibrary.org/b/isbn/9780140437461-L.jpg"
  },
  {
    id: 69,
    titulo: "Moby Dick",
    categoria: "aventura",
    precoCompra: "54,90",
    precoAluguel: "12,00",
    descricao: "A obsessiva e autodestrutiva jornada do Capitão Ahab a bordo do navio Pequod para caçar e vingar-se da lendária baleia branca que lhe arrancou a perna.",
    capa: "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg"
  },
  {
    id: 70,
    titulo: "Os Três Mosqueteiros",
    categoria: "aventura",
    precoCompra: "46,00",
    precoAluguel: "9,90",
    descricao: "O jovem e corajoso D'Artagnan viaja para Paris para se juntar aos mosqueteiros do Rei: Athos, Porthos e Aramis, defendendo a coroa contra conspirações políticas.",
    capa: "https://covers.openlibrary.org/b/isbn/9780140449228-L.jpg"
  },
  {
    id: 71,
    titulo: "O Conde de Monte Cristo",
    categoria: "aventura",
    precoCompra: "79,90",
    precoAluguel: "16,00",
    descricao: "Traído por amigos invejosos e preso injustamente, Edmond Dantès escapa anos mais tarde, adquire uma fortuna oculta e retorna com uma identidade implacável de vingança.",
    capa: "https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg"
  },
  {
    id: 72,
    titulo: "As Aventuras de Robin Hood",
    categoria: "aventura",
    precoCompra: "34,00",
    precoAluguel: "7,50",
    descricao: "O lendário arqueiro fora-da-lei que se esconde na Floresta de Sherwood, roubando aos ricos corruptos para dar aos pobres e desafiando o tirânico Xerife de Nottingham.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141329383-L.jpg"
  },
  {
    id: 73,
    titulo: "A Ilha Misteriosa",
    categoria: "aventura",
    precoCompra: "39,90",
    precoAluguel: "8,50",
    descricao: "Cinco prisioneiros da Guerra Civil Americana escapam num balão e despenham-se numa ilha deserta no Pacífico, enfrentando segredos inexplicáveis com a força da ciência.",
    capa: "https://m.media-amazon.com/images/I/71nWCLYojiL.jpg"
  },
  {
    id: 74,
    titulo: "Viagem ao Centro da Terra",
    categoria: "aventura",
    precoCompra: "38,00",
    precoAluguel: "8,00",
    descricao: "O professor Lidenbrock e o seu sobrinho Axel decifram um pergaminho antigo e iniciam uma expedição fantástica através de um vulcão islandês rumo ao interior do planeta.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141441979-L.jpg"
  },

  // ---------------- AÇÃO (Final) ----------------
  {
    id: 75,
    titulo: "O Alvo",
    categoria: "ação",
    precoCompra: "49,00",
    precoAluguel: "11,00",
    descricao: "Os agentes secretos de elite Will Robie e Jessica Reel enfrentam missões de alto risco globais enquanto se tornam alvos de uma conspiração dentro do próprio governo.",
    capa: "https://covers.openlibrary.org/b/isbn/9781455521203-L.jpg"
  },
  {
    id: 76,
    titulo: "Jack Reacher: Dinheiro Sujo",
    categoria: "ação",
    precoCompra: "45,00",
    precoAluguel: "10,00",
    descricao: "O ex-policial militar Jack Reacher viaja sem rumo e acaba preso injustamente numa pequena cidade do interior, precisando usar os seus punhos e mente para provar a sua inocência.",
    capa: "https://covers.openlibrary.org/b/isbn/9780312966973-L.jpg"
  },
  {
    id: 77,
    titulo: "O Sobrevivente",
    categoria: "ação",
    precoCompra: "42,00",
    precoAluguel: "9,00",
    descricao: "Num futuro cruel, um homem desesperado por dinheiro entra num reality show mortal onde o objetivo é fugir de assassinos profissionais e sobreviver o máximo de tempo possível.",
    capa: "https://m.media-amazon.com/images/I/61J3Z8K+7nL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 78,
    titulo: "Ponto de Impacto",
    categoria: "ação",
    precoCompra: "48,50",
    precoAluguel: "10,90",
    descricao: "A NASA descobre um objeto raríssimo enterrado no gelo do Ártico, mas uma analista descobre indícios de uma fraude colossal, iniciando uma fuga armada pela sobrevivência.",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX30Q8esiZ1cAeZVUef1EIsTNT4MGXw-tqp_KaX9dr_tzU7np3indp3nrUb92da0DqryW2M2iS3hMb3etNBPY9qYBP3b0QS6R3rqudoGSA6w&s=10"
  },
  {
    id: 79,
    titulo: "Fortaleza Digital",
    categoria: "ação",
    precoCompra: "44,00",
    precoAluguel: "9,50",
    descricao: "A supermáquina de criptografia da NSA encontra um código impossível de quebrar. A brilhante matemática Susan Fletcher corre contra o tempo para evitar um desastre tecnológico.",
    capa: "https://covers.openlibrary.org/b/isbn/9780312944926-L.jpg"
  },
  {
    id: 80,
    titulo: "O Ultimato de Bourne",
    categoria: "ação",
    precoCompra: "54,00",
    precoAluguel: "12,50",
    descricao: "O confronto final entre o agente desmemoriado Jason Bourne e o seu arquirrival, o terrorista Carlos, o Chacal, numa perseguição frenética repleta de adrenalina.",
    capa: "https://covers.openlibrary.org/b/isbn/9780345367754-L.jpg"
  },

  // ---------------- SUSPENSE (Final) ----------------
  {
    id: 81,
    titulo: "O Cão dos Baskerville",
    categoria: "suspense",
    precoCompra: "35,00",
    precoAluguel: "7,90",
    descricao: "Sherlock Holmes e o Dr. Watson viajam até às charnecas da Inglaterra para investigar a morte de um lorde, supostamente perseguido por um cão demoníaco lendário.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439624-L.jpg"
  },
  {
    id: 82,
    titulo: "A Garota do Lago",
    categoria: "suspense",
    precoCompra: "39,90",
    precoAluguel: "9,00",
    descricao: "Uma estudante de direito é brutalmente assassinada numa pacata cidade turística. A repórter investigativa Emma Innes decide desenterrar segredos que muitos queriam esconder.",
    capa: "https://m.media-amazon.com/images/I/81LRk6+p1HL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 83,
    titulo: "O Homem de Giz",
    categoria: "suspense",
    precoCompra: "42,90",
    precoAluguel: "9,50",
    descricao: "Em 1986, um grupo de amigos usava bonecos de giz para mandar mensagens secretas, até que um desenho os levou a um corpo desmembrado. Trinta anos depois, os desenhos voltam.",
    capa: "https://covers.openlibrary.org/b/isbn/9781524796334-L.jpg"
  },
  {
    id: 84,
    titulo: "O Paciente Silencioso",
    categoria: "suspense",
    precoCompra: "46,00",
    precoAluguel: "10,50",
    descricao: "Alicia Berenson tem uma vida perfeita até disparar cinco tiros no rosto do marido. Ela nunca mais diz uma única palavra, desafiando um terapeuta criminal empenhado no caso.",
    capa: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg"
  },
  {
    id: 85,
    titulo: "O Signo dos Quatro",
    categoria: "suspense",
    precoCompra: "32,50",
    precoAluguel: "7,00",
    descricao: "Uma jovem recebe anualmente pérolas valiosas após o desaparecimento misterioso do seu pai. Sherlock Holmes entra no caso, descobrindo um pacto secreto indiano e assassinatos.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439693-L.jpg"
  },
  {
    id: 86,
    titulo: "Morte no Nilo",
    categoria: "suspense",
    precoCompra: "38,90",
    precoAluguel: "8,90",
    descricao: "Uma jovem e rica herdeira é assassinada a bordo de um cruzeiro luxuoso pelo rio Egito. Por sorte, o detetive belga Hercule Poirot está a bordo para desvendar o mistério.",
    capa: "https://covers.openlibrary.org/b/isbn/9780007119325-L.jpg"
  },
  {
    id: 87,
    titulo: "Verity",
    categoria: "suspense",
    precoCompra: "45,00",
    precoAluguel: "11,00",
    descricao: "Uma autora falida é contratada para terminar os livros de uma escritora famosa que sofreu um acidente. Na casa da autora, ela encontra uma autobiografia assustadora com revelações sombrias.",
    capa: "https://covers.openlibrary.org/b/isbn/9781409181637-L.jpg"
  },

  // ---------------- ROMANCE (Final) ----------------
  {
    id: 88,
    titulo: "Corte de Espinhos e Rosas",
    categoria: "romance",
    precoCompra: "55,00",
    precoAluguel: "12,00",
    descricao: "Feyre, uma caçadora humana, mata um lobo na floresta e é levada como prisioneira para uma terra mágica e perigosa governada por feéricos imortais e sedutores.",
    capa: "https://covers.openlibrary.org/b/isbn/9781619634442-L.jpg"
  },
  {
    id: 89,
    titulo: "Pessoas Normais",
    categoria: "romance",
    precoCompra: "43,90",
    precoAluguel: "9,90",
    descricao: "A complexa e magnética ligação entre Connell e Marianne, dois jovens de origens sociais diferentes que navegam pelos altos e baixos do amor e amadurecimento na Irlanda.",
    capa: "https://covers.openlibrary.org/b/isbn/9781984822178-L.jpg"
  },
  {
    id: 90,
    titulo: "Querido John",
    categoria: "romance",
    precoCompra: "38,00",
    precoAluguel: "8,50",
    descricao: "Um jovem soldado alista-se no exército e apaixona-se perdidamente por uma estudante universitária. A distância e os eventos históricos testam os limites da sua ligação amorosa.",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAY20HuUCx5mjoPrV6H_xRrR5yiHtVq-cDBqwLZxJstdmMpRpAl9_uuz0u0Eqw1FmlzaDtqTINs8hpiEDBfuEaOqQ18rkY3TQ5lUZ_VdnIA&s=10"
  },
  {
    id: 91,
    titulo: "A Última Música",
    categoria: "romance",
    precoCompra: "39,00",
    precoAluguel: "8,90",
    descricao: "Uma adolescente rebelde é enviada para passar o verão com o pai numa pequena cidade costeira, onde redescobre a sua paixão pela música e conhece o seu primeiro grande amor.",
    capa: "https://m.media-amazon.com/images/I/A1nXWStplsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 92,
    titulo: "Vermelho, Branco e Sangue Azul",
    categoria: "romance",
    precoCompra: "44,90",
    precoAluguel: "10,00",
    descricao: "O filho da presidenta dos Estados Unidos e o príncipe de Inglaterra são rivais declarados, mas uma trégua forçada evolui para uma relação secreta que pode abalar a geopolítica mundial.",
    capa: "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg"
  },
  {
    id: 93,
    titulo: "Leitura de Verão",
    categoria: "romance",
    precoCompra: "42,00",
    precoAluguel: "9,50",
    descricao: "Dois escritores de géneros literários opostos e em crise criativa tornam-se vizinhos de cabana e fazem uma aposta: escrever o estilo do outro até ao fim das férias.",
    capa: "https://covers.openlibrary.org/b/isbn/9781984806734-L.jpg"
  },
  {
    id: 94,
    titulo: "Os Sete Maridos de Evelyn Hugo",
    categoria: "romance",
    precoCompra: "49,90",
    precoAluguel: "11,90",
    descricao: "A lendária e reclusa estrela de Hollywood, Evelyn Hugo, decide finalmente contar toda a verdade sobre a sua vida glamorosa, escandalosa e os seus sete casamentos.",
    capa: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/os-sete-maridos-de-evelyn-hugo.jpg?w=1200&h=675&crop=1"
  },

  // ---------------- SCI-FI (Final) ----------------
  {
    id: 95,
    titulo: "Estação Onze",
    categoria: "sci-fi",
    precoCompra: "46,00",
    precoAluguel: "10,00",
    descricao: "Uma pandemia devastadora colapsa a civilização moderna. Anos depois, uma companhia itinerante de teatro cruza os cenários desolados para manter a arte viva.",
    capa: "https://covers.openlibrary.org/b/isbn/9780385353304-L.jpg"
  },
  {
    id: 96,
    titulo: "O Fim da Infância",
    categoria: "sci-fi",
    precoCompra: "39,90",
    precoAluguel: "9,00",
    descricao: "Naves alienígenas gigantes posicionam-se sobre as grandes capitais da Terra. Os 'Senhores Supremos' trazem paz universal, mas a um preço misterioso para o destino humano.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141183183-L.jpg"
  },
  {
    id: 97,
    titulo: "2001: Uma Odisseia no Espaço",
    categoria: "sci-fi",
    precoCompra: "52,00",
    precoAluguel: "12,00",
    descricao: "Um monólito misterioso é descoberto na Lua, motivando o envio de uma expedição tripulada a Saturno comandada por astronautas e pelo supercomputador HAL 9000.",
    capa: "https://covers.openlibrary.org/b/isbn/9780451457998-L.jpg"
  },
  {
    id: 98,
    titulo: "Eu, Robô",
    categoria: "sci-fi",
    precoCompra: "44,90",
    precoAluguel: "10,50",
    descricao: "A clássica antologia de Isaac Asimov que dita as Três Leis da Robótica, explorando a evolução da inteligência artificial através de quebra-cabeças lógicos geniais.",
    capa: "https://covers.openlibrary.org/b/isbn/9780553382563-L.jpg"
  },
  {
    id: 99,
    titulo: "A Máquina do Tempo",
    categoria: "sci-fi",
    precoCompra: "29,90",
    precoAluguel: "6,90",
    descricao: "Um cientista vitoriano constrói um dispositivo capaz de navegar pelas eras e viaja até ao ano 802.701, descobrindo uma divisão bizarra e sombria na evolução da humanidade.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439976-L.jpg"
  },
  {
    id: 100,
    titulo: "A Guerra dos Mundos",
    categoria: "sci-fi",
    precoCompra: "34,90",
    precoAluguel: "7,90",
    descricao: "O planeta Terra é subitamente invadido por marcianos a bordo de tripés mecânicos gigantescos armados com raios destrutivos, gerando pânico global e colapso total.",
    capa: "https://covers.openlibrary.org/b/isbn/9780141441030-L.jpg"
  }
  ]); 

  // O carregamento agora é 'false' desde o início, pois não precisamos esperar o servidor
  const [carregando] = useState(false);

  // O useEffect que fazia o fetch('http://localhost...') foi REMOVIDO!

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