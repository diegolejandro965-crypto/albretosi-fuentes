
function cargarpagina(pagina) {
    fetch('pages/' + pagina)
    .then(response => {
        if(!response.ok) {
            throw new Error ('Error al cargar la pagina');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenido').innerHTML = data;
        localStorage.setItem("paginaActual", pagina);
    })
    .catch(error => {
        document.getElementById('contenido').innerHTML = 
         "<p>Entedieron o no??</p>";
        console.error(error);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const paginaGuardada = localStorage.getItem("paginaActual");
    if (paginaGuardada) {
        cargarpagina(paginaGuardada);
    } else {
        cargarpagina("inicio.html");
    }
});