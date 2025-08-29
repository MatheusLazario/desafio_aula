

const form = document.getElementById("grupoForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  // Coleta os nomes dos campos e ignora vazios
  const names = [
    data.get("nome1"),
    data.get("nome2"),
    data.get("nome3"),
    data.get("nome4"),
    data.get("nome5")
  ].filter(n => n && n.trim() !== "");
  const message = data.get("historia") || "";

  const body = JSON.stringify({ names, message });

  try {
    const response = await fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const result = await response.json();
    alert("Resposta da API:\n" + JSON.stringify(result, null, 2));
  } catch (error) {
    alert("Erro ao enviar:\n" + error);
  }
});
