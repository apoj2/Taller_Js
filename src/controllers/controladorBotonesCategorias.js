export function pintarBotonesCategorias(categorias){

    let filaBotonesCategorias = document.getElementById("filaBotonesCategorias")
    filaBotonesCategorias.innerHTML=""

    categorias.forEach(function(categoria){

        let columna= document.createElement("div")
        columna.classList.add("col","m-3")

        let botonCategoria = document.createElement("button")
        botonCategoria.classList.add("boton","bg-transparent","border-dark","border-4","text-dark","rounded-0","w-100")
        
        if(categoria.categoriac == 5){
            botonCategoria.classList.remove("bg-transparent","border","border-dark","border-4")
            botonCategoria.classList.add("bg-danger")
        }

        botonCategoria.addEventListener("mouseout",function(evento){
            botonCategoria.classList.remove("border-dark","text-dark")
            botonCategoria.classList.add("border-danger","text-danger")
            if(categoria.categoriac == 5){
                botonCategoria.classList.remove("bg-danger")
                botonCategoria.classList.add("bg-transparent","border","border-2")
                
            }
         
        })
        botonCategoria.addEventListener("mouseleave",function(evento){
            botonCategoria.classList.remove("boder-danger","text-danger")
            botonCategoria.classList.add("border-dark","text-dark")
            if(categoria.categoriac == 5){
                botonCategoria.classList.remove("bg-transparent","border","border-dark","border-4")
                botonCategoria.classList.add("bg-danger")
                
            }
        })

      

        let titulo =document.createElement("h6")
        titulo.classList.add("text-center","mt-1","mx-auto")
        titulo.textContent=categoria.nombre

        botonCategoria.appendChild(titulo)
        columna.appendChild(botonCategoria)
        filaBotonesCategorias.appendChild(columna)
    })
}