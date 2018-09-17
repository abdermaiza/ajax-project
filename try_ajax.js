$(function () {

  $("input").change(function () {

    numeroAleatoire = Math.floor((Math.random() * 4) + 1); // définit aléatoirement un num de 1 à 4
    numeroPage = $(this)[0].value;
    $.ajax({
      url: "json-" + numeroPage + ".json",
      success: function (data) {
        $("#title").html('<H1>' + data.title + '</H1>'); // Affiche le titre du Json
        $("#title").append('<img src="https://placeimg.com/260/195/arch">'); // Affiche l'image
        $("#title").append('<H2>' + data.subtitle + '</H2>'); // Affiche le sous-titre
      }
    });

  });

});