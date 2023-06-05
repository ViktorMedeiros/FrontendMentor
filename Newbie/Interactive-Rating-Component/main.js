let selectedRating = 0;

var backgroundElements = document.querySelectorAll('#oneToFive .background');

backgroundElements.forEach(function(element) {
    element.addEventListener('click', function() {
    backgroundElements.forEach(function(el) {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
    
    selectedRating = element.dataset.value;
    });
});

function submitRating() {
    if (selectedRating !== 0) {
    document.getElementById("oneToFive").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    
    document.getElementById("selectedRating").innerText = selectedRating;
    
    document.getElementById("wrapper-thankYou").style.display = "flex";
    }
}