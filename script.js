function charger(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById("contenu").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("contenu").innerHTML = "<p>Erreur de chargement.</p>";
    });
}
