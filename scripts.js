document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.querySelector(".download-btn");

    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Animation du bouton
        downloadBtn.classList.add("downloading");
        downloadBtn.textContent = "Téléchargement en cours...";

        // Simuler un démarrage de téléchargement (1,5s)
        setTimeout(() => {
            window.location.href = downloadBtn.getAttribute("href");
            downloadBtn.textContent = "Téléchargé ! 🚀";
        }, 1500);
    });
});
