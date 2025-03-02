document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("mainContent");

    // Asegurémonos de que los elementos dentro de mainContent sean arrastrables
    Sortable.create(mainContent, {
        draggable: ".content-box",  // Especificamos que los divs con .content-box son arrastrables
        animation: 150,  // La animación del arrastre
        ghostClass: "sortable-ghost",  // Estilo para el elemento en arrastre
        onEnd: function (evt) {
            console.log(`Elemento movido: ${evt.item.id}`);
        }
    });
});
