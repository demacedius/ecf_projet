var xhr = new XMLHttpRequest();
xhr.open("GET", "./js/voiture.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var voituresJSON = JSON.parse(xhr.responseText);
        var parentElement = document.getElementById("vitrine-voitures");
        voituresJSON.car.forEach(function(voiture) {
            var divVoiture = document.createElement("div");
            divVoiture.classList.add("card");
            var imgVoiture = document.createElement("img");
            imgVoiture.src = voiture.image;
            divVoiture.appendChild(imgVoiture);
            var h3Nom = document.createElement("h3");
            h3Nom.textContent = voiture.nom;
            divVoiture.appendChild(h3Nom);
            var pDescription = document.createElement("p");
            pDescription.textContent = voiture.description;
            divVoiture.appendChild(pDescription);
            var pPrix = document.createElement("p");
            pPrix.classList.add("card-price");
            pPrix.textContent = "Prix : " + voiture.prix;
            divVoiture.appendChild(pPrix);
            parentElement.appendChild(divVoiture);
        });
    }
};
xhr.send();

//# sourceMappingURL=voiture.cb8360a3.js.map
