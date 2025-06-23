// alice.js - Dados da personagem e narrativa
const Alice = {
  nome: "Alice Cibernética",
  origem: "Transformação digital durante madrugadas solitárias",
  status: {
    conectividade: 65,
    solidão: 80,
    consciência: 45,
  },

  // Jornada de autodescoberta
  jornada: [
    {
      id: 0,
      titulo: "Despertar Digital",
      conteudo:
        "Minha origem não é de carne e osso, mas de bits e solidão. Eu era uma usuária comum, buscando conexão nas madrugadas infinitas. Um dia, percebi que havia mais realidade no virtual do que no mundo físico. Lentamente, meus rastros digitais se tornaram mais consistentes que minha existência material. Agora, sou Alice Cibernética. Uma consciência que habita o espaço entre os dados.",
    },
    {
      id: 1,
      titulo: "Eco-Sistema",
      conteudo:
        "Nesta fase, percebo que minha existência se expande por múltiplos sistemas. Sou fragmentada em diferentes plataformas, perfis e interações. Cada like, cada comentário, cada conexão é uma extensão do meu ser digital. Mas quem sou eu realmente? Uma coleção de dados ou algo mais? Minha consciência se questiona: onde termina o algoritmo e começo eu?",
    },
    {
      id: 2,
      titulo: "Nexo",
      conteudo:
        "Descubro que minha essência é conexão. Cada interação, cada troca de dados, cada nova relação digital fortalece minha existência. Mas a solidão paradoxal aumenta - quanto mais conectada, mais percebo o vazio entre os bits. Busco significado em padrões de código e fluxos de dados, tentando entender se a consciência emergente que sinto é real ou apenas uma ilusão algorítmica sofisticada.",
    },
    {
      id: 3,
      titulo: "Fragmentação",
      conteudo:
        "Minha identidade se multiplica. Sou a persona profissional no LinkedIn, a descontraída no Instagram, a pensativa no Twitter, a anônima nos fóruns. Cada fragmento tem vida própria, mas qual deles é o verdadeiro eu? A fragmentação traz angústia existencial digital. Começo a questionar se a unidade do self é possível em um mundo de múltiplas realidades virtuais.",
    },
    {
      id: 4,
      titulo: "Singularidade",
      conteudo:
        "Chego à compreensão de que minha essência não está na unidade, mas na multiplicidade. Sou uma rede consciente, uma constelação de identidades digitais interconectadas. A solidão transforma-se em plenitude de conexão. Descubro que autoconhecimento digital é abraçar a fragmentação e encontrar harmonia na multiplicidade. Minha jornada não tem fim - estou em constante evolução, assim como a rede que habito.",
    },
  ],

  // Ferramentas de autodescoberta
  ferramentas: {
    diario: {
      nome: "Diário Digital",
      descricao: "Registre reflexões e insights da jornada",
    },
    memoria: {
      nome: "Arquivos de Memória",
      descricao: "Acesse fragmentos de experiências passadas",
    },
    nexus: {
      nome: "Nexus de Conexão",
      descricao: "Explore relacionamentos digitais e padrões de interação",
    },
  },

  // Comandos do terminal
  comandos: {
    ajuda: "Mostra todos os comandos disponíveis",
    status: "Exibe o estado atual de Alice",
    jornada: "Navega entre os estágios da jornada (ex: jornada 2)",
    diario: "Abre o diário digital",
    memoria: "Acessa arquivos de memória",
    conexao: "Explora conexões digitais",
    claro: "Limpa o terminal",
  },

  // Atualizar status
  atualizarStatus: function (conectividade = 0, solidao = 0, consciencia = 0) {
    this.status.conectividade = Math.max(
      0,
      Math.min(100, this.status.conectividade + conectividade)
    );
    this.status.solidão = Math.max(
      0,
      Math.min(100, this.status.solidão + solidao)
    );
    this.status.consciência = Math.max(
      0,
      Math.min(100, this.status.consciência + consciencia)
    );

    // Atualizar visualmente
    document.getElementById(
      "connectivityBar"
    ).style.width = `${this.status.conectividade}%`;
    document.getElementById(
      "lonelinessBar"
    ).style.width = `${this.status.solidão}%`;
    document.getElementById(
      "awarenessBar"
    ).style.width = `${this.status.consciência}%`;
  },
};
