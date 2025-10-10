// Animación suave al hacer clic en los enlaces del menú
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");

    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});

console.log("🌿 Naturalia Tienda Naturista — mapa añadido al footer ✔️");