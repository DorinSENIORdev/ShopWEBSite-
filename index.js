// Funcția pentru a deschide popup-ul
function showPopup() {
    document.getElementById("myPopup").style.display = "flex";
}

// Închiderea popup-ului când se face clic pe butonul de închidere
document.getElementById("closePopupBtn").addEventListener("click", function () {
    document.getElementById("myPopup").style.display = "none";
});

// Închiderea popup-ului când se face clic pe fundal
document.getElementById("myPopup").addEventListener("click", function (event) {
    // Verificăm dacă clicul a fost făcut pe fundal, nu pe conținutul popup-ului
    if (event.target === this) {
        document.getElementById("myPopup").style.display = "none";
    }
});
