export function pintarPromociones(promociones){

    let filaPromociones= document.getElementById("filaPromociones")
    filaPromociones.innerHTML=""

    promociones.forEach(function(promocion){

     if(promocion.lado==1){
        let columna = document.createElement("div")
        columna.classList.add("row","row-cols-12","row-cols-md-12","g-0")

        let columna1 = document.createElement("div")
        columna1.classList.add("col","col-12","col-md-4","p-4","text-center")

        let columna2 = document.createElement("div")
        columna2.classList.add("col","col-12","col-md-8")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=promocion.foto

        let titulo =document.createElement("h4")
        titulo.textContent=promocion.nombre

        let descripcion1 = document.createElement("p")
        descripcion1.textContent=promocion.descripcion

        let botonvermas = document.createElement("a")
        botonvermas.classList.add("btn","border-danger","border","border-3","text-danger","fw-bold","my-2","fs-6","w-50","mx-auto","d-block","m-xxl-auto")
        botonvermas.textContent="+ VER MAS"

        columna1.appendChild(titulo)
        columna1.appendChild(descripcion1)
        columna1.appendChild(botonvermas)
        columna2.appendChild(imagen)
        columna.appendChild(columna1)
        columna.appendChild(columna2)
        filaPromociones.appendChild(columna)
     }
     if(promocion.lado==2){
        let columna = document.createElement("div")
        columna.classList.add("row","row-cols-12","row-cols-md-12","g-0")

        let columna1 = document.createElement("div")
        columna1.classList.add("col","col-12","col-md-4","p-4","text-center")

        let columna2 = document.createElement("div")
        columna2.classList.add("col","col-12","col-md-8")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=promocion.foto

        let titulo =document.createElement("h4")
        titulo.textContent=promocion.nombre

        let descripcion1 = document.createElement("p")
        descripcion1.textContent=promocion.descripcion

        let botonvermas = document.createElement("a")
        botonvermas.classList.add("btn","border-danger","border","border-3","text-danger","fw-bold","my-2","fs-6","w-50","mx-auto","d-block","m-xxl-auto")
        botonvermas.textContent="+ VER MAS"
        columna2.appendChild(imagen)
        columna1.appendChild(titulo)
        columna1.appendChild(descripcion1)
        columna1.appendChild(botonvermas)
        columna.appendChild(columna2)
        columna.appendChild(columna1)
        filaPromociones.appendChild(columna)
     }
    })
}