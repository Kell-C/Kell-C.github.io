document.addEventListener("DOMContentLoaded", function () {
  const nodes = document.querySelectorAll(".node");
  const detailsPanel = document.getElementById("node-details");
  const detailTitle = document.getElementById("detail-title");
  const detailDescription = document.getElementById("detail-description");
  const detailsStats = document.querySelector(".details-stats");
  const closeButton = document.querySelector(".close-details");

  // Criar tooltip
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  // Dados completos para todos os nós
  const nodeData = {
    "nova-ead": {
      title: "Nova Política de EaD",
      description:
        "Decreto nº 12.456/2025 estabelece três formatos de ensino: presencial (até 30% EaD), semipresencial (mínimo 30% presencial) e EaD (mínimo 20% presencial). Cursos de medicina, direito, enfermagem, odontologia e psicologia são vedados no formato EaD.<br><br>Principais inovações:<ul><li>Mediação pedagógica obrigatória com formação específica</li><li>Avaliações presenciais com peso mínimo de 60%</li><li>Infraestrutura digital garantida para polos EaD</li><li>Transição gradual em 24 meses para cursos existentes</li></ul>",
      stats: [
        {
          label: "Expansão EaD",
          value: "+40%",
          percent: 65,
          color: "var(--secondary)",
        },
        {
          label: "Investimento em Infraestrutura",
          value: "R$ 2.1 bi",
          percent: 45,
          color: "var(--success)",
        },
        {
          label: "Formação de Mediadores",
          value: "18.000 vagas",
          percent: 30,
          color: "var(--warning)",
        },
      ],
    },
    pne: {
      title: "PNE (2024-2034)",
      description:
        "Plano Nacional de Educação com metas para universalização, qualidade e financiamento. Principais focos:<ul><li>Universalização da educação infantil para crianças de 4 e 5 anos</li><li>Atendimento de 50% das crianças de 0 a 3 anos em creches</li><li>Elevação da escolaridade média da população para 12 anos</li><li>Investimento de 10% do PIB em educação</li></ul>",
      stats: [
        {
          label: "Cobertura Educação Infantil",
          value: "92%",
          percent: 92,
          color: "var(--success)",
        },
        {
          label: "Investimento PIB",
          value: "7.5%",
          percent: 75,
          color: "var(--secondary)",
        },
        {
          label: "Meta Escolaridade",
          value: "12 anos",
          percent: 80,
          color: "var(--warning)",
        },
      ],
    },
    fundeb: {
      title: "FUNDEB Permanente",
      description:
        "Fundo de Manutenção da Educação Básica com novos critérios de distribuição em análise pela Comissão de Educação do Senado (REQ 8/2025-CE). Foco em sustentabilidade financeira e regulamentação de fontes adicionais.<br><br>Principais mudanças propostas:<ul><li>Redução de desigualdades regionais</li><li>Vinculação de 30% dos recursos para formação docente</li><li>Fiscalização integrada com TCU e CGU</li></ul>",
      stats: [
        {
          label: "Cobertura Municipal",
          value: "98%",
          percent: 98,
          color: "var(--success)",
        },
        {
          label: "Recursos para Formação",
          value: "R$ 9.8 bi",
          percent: 75,
          color: "var(--secondary)",
        },
        {
          label: "Meta de Equidade",
          value: "87%",
          percent: 65,
          color: "var(--warning)",
        },
      ],
    },
    pde: {
      title: "PDE 2025-2030",
      description:
        "Plano de Desenvolvimento da Educação com foco em gestão, formação docente e infraestrutura. Eixos estratégicos:<ul><li>Implementação de sistemas integrados de gestão</li><li>Formação continuada de professores em competências digitais</li><li>Modernização da infraestrutura escolar</li><li>Expansão do ensino integral</li></ul>",
      stats: [
        {
          label: "Escolas com Gestão Moderna",
          value: "65%",
          percent: 65,
          color: "var(--secondary)",
        },
        {
          label: "Professores Formados",
          value: "450.000",
          percent: 60,
          color: "var(--success)",
        },
        {
          label: "Investimento em Infraestrutura",
          value: "R$ 15 bi",
          percent: 40,
          color: "var(--warning)",
        },
      ],
    },
    alfabetizacao: {
      title: "Compromisso Nacional Criança Alfabetizada",
      description:
        "Programa com meta de 95% das crianças alfabetizadas até o 2º ano do Ensino Fundamental até 2026. Estratégias:<ul><li>Formação específica para professores alfabetizadores</li><li>Materiais didáticos alinhados à neurociência</li><li>Avaliações diagnósticas semestrais</li><li>Bônus por resultados para escolas</li></ul>",
      stats: [
        {
          label: "Crianças Alfabetizadas",
          value: "89%",
          percent: 89,
          color: "var(--success)",
        },
        {
          label: "Escolas Participantes",
          value: "78%",
          percent: 78,
          color: "var(--secondary)",
        },
        {
          label: "Meta 2026",
          value: "95%",
          percent: 95,
          color: "var(--warning)",
        },
      ],
    },
    reforma: {
      title: "Reforma do Ensino Médio",
      description:
        "Implementação dos itinerários formativos com foco em competências digitais. Novidades em 2025:<ul><li>Integração com o Mundo do Trabalho (40% da carga horária)</li><li>Certificações intermediárias por competência</li><li>Plataforma digital unificada de itinerários</li><li>Parcerias com empresas para projetos práticos</li></ul>",
      stats: [
        {
          label: "Escolas com Itinerários",
          value: "82%",
          percent: 82,
          color: "var(--secondary)",
        },
        {
          label: "Estudantes em Itinerários STEM",
          value: "35%",
          percent: 35,
          color: "var(--success)",
        },
        {
          label: "Taxa de Evasão",
          value: "5.2%",
          percent: 48,
          color: "var(--warning)",
        },
      ],
    },
    saeb: {
      title: "SAEB 2025",
      description:
        "Avaliação ampliada com testes de ciências e competências socioemocionais. Principais mudanças:<ul><li>Aplicação digital em 70% das escolas</li><li>Indicadores de desenvolvimento integral</li><li>Relatórios personalizados por escola</li><li>Dados em tempo real para gestores</li></ul>",
      stats: [
        {
          label: "Escolas Avaliadas",
          value: "92%",
          percent: 92,
          color: "var(--success)",
        },
        {
          label: "Aplicação Digital",
          value: "70%",
          percent: 70,
          color: "var(--secondary)",
        },
        {
          label: "Índice Confiabilidade",
          value: "94%",
          percent: 94,
          color: "var(--warning)",
        },
      ],
    },
    ideb: {
      title: "IDEB 2025",
      description:
        "Novas metas: anos iniciais (6.5), anos finais (5.5), ensino médio (5.0). Metodologia atualizada:<ul><li>Peso maior para redução de desigualdades</li><li>Indicador de equidade racial e socioeconômica</li><li>Bônus para escolas que superarem metas</li><li>Publicação trimestral de resultados parciais</li></ul>",
      stats: [
        {
          label: "Meta Anos Iniciais",
          value: "6.5",
          percent: 85,
          color: "var(--secondary)",
        },
        {
          label: "Meta Anos Finais",
          value: "5.5",
          percent: 75,
          color: "var(--success)",
        },
        {
          label: "Meta Ensino Médio",
          value: "5.0",
          percent: 65,
          color: "var(--warning)",
        },
      ],
    },
    financiamento: {
      title: "Investimento em Educação",
      description:
        "Meta de 7% do PIB com foco em infraestrutura e formação docente. Distribuição prevista:<ul><li>40% para educação básica</li><li>30% para educação superior</li><li>20% para inovação tecnológica</li><li>10% para pesquisa e desenvolvimento</li></ul>",
      stats: [
        {
          label: "PIB Investido",
          value: "6.8%",
          percent: 68,
          color: "var(--secondary)",
        },
        {
          label: "Infraestrutura",
          value: "R$ 28 bi",
          percent: 45,
          color: "var(--success)",
        },
        {
          label: "Formação Docente",
          value: "R$ 9.5 bi",
          percent: 38,
          color: "var(--warning)",
        },
      ],
    },
    inclusao: {
      title: "Inclusão Digital",
      description:
        "Programa Nacional de Conectividade para 80% das escolas públicas. Componentes:<ul><li>Internet banda larga de alta velocidade</li><li>Dispositivos 1:1 para alunos do ensino médio</li><li>Plataforma de conteúdos digitais integrada</li><li>Formação em competências digitais para professores</li></ul>",
      stats: [
        {
          label: "Escolas Conectadas",
          value: "65%",
          percent: 65,
          color: "var(--secondary)",
        },
        {
          label: "Alunos com Dispositivos",
          value: "42%",
          percent: 42,
          color: "var(--success)",
        },
        {
          label: "Meta 2026",
          value: "80%",
          percent: 80,
          color: "var(--warning)",
        },
      ],
    },
    formacao: {
      title: "Formação Docente",
      description:
        "Política Nacional de Valorização com piso de R$ 6.246,57 e certificação digital. Pilares:<ul><li>Progressão por mérito baseada em resultados</li><li>Certificação em competências digitais obrigatória</li><li>Licença-capacitação remunerada</li><li>Mestrado profissional gratuito</li></ul>",
      stats: [
        {
          label: "Piso Salarial",
          value: "R$ 6.246,57",
          percent: 100,
          color: "var(--success)",
        },
        {
          label: "Professores Certificados",
          value: "38%",
          percent: 38,
          color: "var(--secondary)",
        },
        {
          label: "Investimento em Mestrados",
          value: "R$ 1.2 bi",
          percent: 60,
          color: "var(--warning)",
        },
      ],
    },
    competencias: {
      title: "Competências para 2025",
      description:
        "Priorização de habilidades socioemocionais no currículo com base no relatório do Fórum Econômico Mundial:<br><br><ul><li><strong>Top 5 Competências:</strong> Pensamento crítico, criatividade, resiliência, fluência digital e aprendizagem ativa</li><li>Integração com BNCC através de projetos interdisciplinares</li><li>Certificação docente em metodologias ativas</li></ul>",
      stats: [
        {
          label: "Demanda por Habilidades Digitais",
          value: "+58%",
          percent: 58,
          color: "var(--secondary)",
        },
        {
          label: "Investimento em Formação",
          value: "R$ 760 mi",
          percent: 42,
          color: "var(--success)",
        },
        {
          label: "Escolas com Projetos Inovadores",
          value: "63%",
          percent: 63,
          color: "var(--warning)",
        },
      ],
    },
  };

  // Função para atualizar estatísticas
  function updateStats(stats) {
    let statsHTML = `
      <div class="stats-title">
        <i class="fas fa-chart-pie"></i> Impacto Esperado (2025-2026)
      </div>
    `;

    stats.forEach((stat) => {
      statsHTML += `
        <div class="stat-item">
          <div class="stat-label">
            <span>${stat.label}</span>
            <span>${stat.value}</span>
          </div>
          <div class="stat-bar">
            <div class="stat-progress" style="width: ${stat.percent}%; background: ${stat.color};"></div>
          </div>
        </div>
      `;
    });

    detailsStats.innerHTML = statsHTML;
  }

  // Interatividade
  nodes.forEach((node) => {
    node.addEventListener("click", function () {
      const nodeId = this.getAttribute("data-details");
      const data = nodeData[nodeId];

      if (data) {
        detailTitle.textContent = data.title;
        detailDescription.innerHTML = data.description;

        // Atualizar estatísticas
        if (data.stats) {
          updateStats(data.stats);
        }

        detailsPanel.classList.add("active");

        // Scroll suave para o painel
        detailsPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    node.addEventListener("mouseenter", function (e) {
      const rect = this.getBoundingClientRect();
      tooltip.style.opacity = "1";
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 50}px`;
      tooltip.style.transform = "translateX(-50%)";
      tooltip.textContent = "Clique para detalhes";
    });

    node.addEventListener("mouseleave", function () {
      tooltip.style.opacity = "0";
    });
  });

  closeButton.addEventListener("click", function () {
    detailsPanel.classList.remove("active");
  });

  // Exportar PDF
  document.getElementById("export-btn").addEventListener("click", function () {
    alert(
      "Recurso de exportação ativado! Em versão completa, geraria PDF com todo o mapa."
    );
  });

  // Modo Colaborativo
  document
    .getElementById("collaborate-btn")
    .addEventListener("click", function () {
      alert(
        "Modo colaborativo: Conectando-se à plataforma Miro para edição em tempo real"
      );
    });
});
