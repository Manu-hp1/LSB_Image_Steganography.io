// Smooth shadow effect on scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 25px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
    }
});
