document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".smooth-scroll");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }
});
