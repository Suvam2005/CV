
document.addEventListener("scroll", function() {
    const arrow = document.querySelector(".down-arrow");
    if (window.scrollY > 25) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});

