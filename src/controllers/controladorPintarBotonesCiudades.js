export function pintarBotonesCiudades(ciudades){

    let filaciudades = document.getElementById("filaciudades")
    filaciudades.innerHTML=""

    ciudades.forEach(function(ciudad){

        let columna = document.createElement("div")
        columna.classList.add("col","col-12","col-md-6","mx-auto","m-2")

        let boton =document.createElement("a")
        boton.classList.add("text-center","btn","bg-white","rounded-pill","text-danger","mx-auto","d-block","border-danger")
        boton.addEventListener("mouseout",function(evento){
        boton.classList.remove("bg-white","text-danger")
        boton.classList.add("btn-outline-danger","text-white","m-2")
        })
        boton.addEventListener("mouseleave",function(evento){
            boton.classList.remove("btn-outline-danger","text-white","m-2")
            boton.classList.add("bg-white","text-danger")
            
        })

        let titulo =document.createElement("h6")
        titulo.classList.add("text-center")
        titulo.textContent=ciudad.nombre

        boton.appendChild(titulo)
        columna.appendChild(boton)
        filaciudades.appendChild(columna)


    })
}