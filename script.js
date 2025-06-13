document.addEventListener("DOMContentLoaded", function () {
  const nodes = document.querySelectorAll(".node");
  const detailsPanel = document.getElementById("node-details");
  const detailTitle = document.getElementById("detail-title");
  const detailDescription = document.getElementById("detail-description");
  const closeButton = document.querySelector(".close-details");
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  // Dados dinâmicos para cada nó
  const nodeData = {
    "nova-ead": {
      title: "Nova Política de EaD",
      description:
        "Decreto nº 12.456/2025 estabelece três formatos de ensino: presencial (até 30% EaD), semipresencial (mínimo 30% presencial) e EaD (mínimo 20% presencial). Cursos de medicina, direito, enfermagem, odontologia e psicologia são vedados no formato EaD .<br><br>Principais inovações:<ul><li>Mediação pedagógica obrigatória com formação específica</li><li>Avaliações presenciais com peso mínimo de 60%</li><li>Infraestrutura digital garantida para polos EaD</li><li>Transição gradual em 24 meses para cursos existentes</li></ul>",
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
    fundeb: {
      title: "FUNDEB Permanente",
      description:
        "Fundo de Manutenção da Educação Básica com novos critérios de distribuição em análise pela Comissão de Educação do Senado (REQ 8/2025-CE). Foco em sustentabilidade financeira e regulamentação de fontes adicionais .<br><br>Principais mudanças propostas:<ul><li>Redução de desigualdades regionais</li><li>Vinculação de 30% dos recursos para formação docente</li><li>Fiscalização integrada com TCU e CGU</li></ul>",
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
    competencias: {
      title: "Competências para 2025",
      description:
        "Priorização de habilidades socioemocionais no currículo com base no relatório do Fórum Econômico Mundial :<br><br><ul><li><strong>Top 5 Competências:</strong> Pensamento crítico, criatividade, resiliência, fluência digital e aprendizagem ativa</li><li>Integração com BNCC através de projetos interdisciplinares</li><li>Certificação docente em metodologias ativas</li></ul>",
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

  // Interatividade
  nodes.forEach((node) => {
    node.addEventListener("click", function () {
      const nodeId = this.getAttribute("data-details");
      const data = nodeData[nodeId];

      if (data) {
        detailTitle.textContent = data.title;
        detailDescription.innerHTML = data.description;
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
        "Modo colaborativo: Conectando-se à plataforma Miro para edição em tempo real "
      );
    });
});
