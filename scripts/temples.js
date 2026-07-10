document.addEventListener("DOMContentLoaded", () => {

    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }

    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
 
            navList.classList.toggle("active");
            

            menuToggle.classList.toggle("open");
            

            const isExpanded = navList.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        const navLinks = navList.querySelectorAll("a"); 
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});