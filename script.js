document.querySelectorAll("main img").forEach(function(image) {
    image.addEventListener("click", function() {
        image.classList.toggle("zoomed");
    });
});