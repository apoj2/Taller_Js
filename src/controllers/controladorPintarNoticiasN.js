export function pintarNoticiasN(noticias){

    let filanoticias = document.getElementById("filaNoticias")
    filanoticias.innerHTML=""

    noticias.forEach(function(noticia){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("row","row-cols-12","row-cols-md-2")

        let columnatarjeta =document.createElement("div")
        columnatarjeta.classList.add("col","col-12","col-md-4")

        let columnatarjeta2=document.createElement("div")
        columnatarjeta2.classList.add("col,","col-12","col-md-8")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=noticia.foto

        let titulo = document.createElement("h2")
        titulo.textContent=noticia.nombre

        let descripcion = document.createElement("p")
        descripcion.textContent=noticia.nota

        let boton =document.createElement("a")
        boton.classList.add("text-danger","nav-link","pointer","p-3")
        boton.textContent="+ MAS INFORMACION"

        tarjeta.appendChild(columnatarjeta)
        tarjeta.appendChild(columnatarjeta2)
        columnatarjeta.appendChild(imagen)
        columnatarjeta2.appendChild(titulo)
        columnatarjeta2.appendChild(descripcion)
        columnatarjeta2.appendChild(boton)
        columna.appendChild(tarjeta)
        filanoticias.appendChild(columna)

        
    })
}