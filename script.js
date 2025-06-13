document.addEventListener("DOMContentLoaded", function () {
  // Configuração do gráfico IDEB
  const ctx = document.getElementById("ideb-chart").getContext("2d");
  const idebChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "2005",
        "2007",
        "2009",
        "2011",
        "2013",
        "2015",
        "2017",
        "2019",
        "2021",
      ],
      datasets: [
        {
          label: "Anos Iniciais",
          data: [3.8, 4.2, 4.6, 5.0, 5.2, 5.5, 5.8, 6.0, 6.1],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: "Anos Finais",
          data: [3.5, 3.8, 4.0, 4.1, 4.2, 4.5, 4.7, 4.9, 5.0],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: "Ensino Médio",
          data: [3.4, 3.5, 3.6, 3.7, 3.7, 3.7, 3.8, 4.2, 4.3],
          borderColor: "#2ecc71",
          backgroundColor: "rgba(46, 204, 113, 0.1)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Evolução do IDEB no Brasil (2005-2021)",
          font: {
            size: 16,
          },
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 3,
          max: 7,
          title: {
            display: true,
            text: "Nota IDEB",
          },
        },
      },
    },
  });

  // Interatividade do mapa mental
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((node) => {
    node.addEventListener("click", function () {
      this.style.backgroundColor = "#d6eaf8";
      this.style.transform = "scale(1.05)";

      // Reset other nodes after a short delay
      setTimeout(() => {
        nodes.forEach((n) => {
          if (n !== this) {
            n.style.backgroundColor = "#ecf0f1";
            n.style.transform = "";
          }
        });
      }, 1000);
    });
  });

  // Botão para ampliar o mapa mental
  const toggleMindmapBtn = document.getElementById("toggle-mindmap");
  const mindmapContainer = document.querySelector(".mindmap-container");

  toggleMindmapBtn.addEventListener("click", function () {
    mindmapContainer.classList.toggle("expanded");

    if (mindmapContainer.classList.contains("expanded")) {
      this.innerHTML = '<i class="fas fa-compress"></i> Reduzir Mapa';
      mindmapContainer.style.overflow = "visible";
      mindmapContainer.style.height = "auto";
    } else {
      this.innerHTML = '<i class="fas fa-expand"></i> Ampliar Mapa';
      mindmapContainer.style.overflow = "auto";
      mindmapContainer.style.height = "500px";
    }
  });

  // Efeito de rolagem suave para links de navegação
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    });
  });

  // Mostrar detalhes dos cards
  const detailButtons = document.querySelectorAll(".btn-details");
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      const policy = card.querySelector("h3").textContent;

      alert(
        `Você clicou para ver mais detalhes sobre: ${policy}\n\nEsta funcionalidade pode ser expandida para mostrar informações mais completas.`
      );
    });
  });
});
