const form = document.getElementById("grupoForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());
  alert("Dados enviados:\n" + JSON.stringify(entries, null, 2));
});
