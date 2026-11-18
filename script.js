document.querySelectorAll("main img").forEach(function(image) {
    image.addEventListener("click", function() {
        image.classList.toggle("zoomed");
    });
});
document.querySelectorAll("details").forEach(function(detail) {
    detail.addEventListener("toggle", function() {
        if (detail.open) {
            document.querySelectorAll("details").forEach(function(other) {
                if (other !== detail) {
                    other.open = false;
                }
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector(".hero h2");

    if (heroTitle) {
        heroTitle.classList.add("hero-animate");
    }
});