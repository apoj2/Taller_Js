export function pintarNoticias(noticias){
    let filanoticias = document.getElementById("filanoticias")
    filanoticias.innerHTML=""

    noticias.forEach(function(noticia){

        let columna = document.createElement("div")
        columna.classList.add("col","col-12","col-md-12","shadow","my-1","pointer")

        let fecha1 = document.createElement("h6")
        fecha1.classList.add("text-secondary")
        fecha1.textContent=noticia.fecha

        let titulo = document.createElement("h3")
        titulo.textContent=noticia.nombre

        let noticiad = document.createElement("p")
        noticiad.textContent=noticia.nota

        columna.appendChild(fecha1)
        columna.appendChild(titulo)
        columna.appendChild(noticiad)
        filanoticias.appendChild(columna)
    })
}