
function showPopup() {
    document.getElementById("myPopup").style.display = "flex";
}

document.getElementById("closePopupBtn").addEventListener("click", function () {
    document.getElementById("myPopup").style.display = "none";
});


document.getElementById("myPopup").addEventListener("click", function (event) {

    if (event.target === this) {
        document.getElementById("myPopup").style.display = "none";
    }
});
