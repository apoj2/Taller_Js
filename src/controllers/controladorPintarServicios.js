export function pintarServicios(servicios){

    let filaServicios = document.getElementById("filaServicios")
    filaServicios.innerHTML=""

    servicios.forEach(function(servicio){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("w-100","shadow","pointer","tarjeta-servicios")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100","grayscale")
        imagen.src=servicio.foto

        let nombre = document.createElement("h5")
        nombre.classList.add("mx-3","mt-2","fw-bold")
        nombre.textContent=servicio.titulo

        let separador=document.createElement("p")
        separador.classList.add("mx-3")
        separador.textContent="--------------------------------------------------"
        

        

        let descripcion = document.createElement("p")
        descripcion.classList.add("mx-3")
        descripcion.textContent=servicio.descripcion
         
        let divisionBoton = document.createElement("div")


        let boton =document.createElement("a")
        boton.classList.add("text-danger","nav-link","pointer","p-3","text-center")
        boton.textContent="+ MAS INFORMACION"
        
        boton.addEventListener("mouseout",function(evento){
            boton.classList.remove("nav-link")
        })
        boton.addEventListener("mouseleave",function(evento){
            boton.classList.add("nav-link")
        })

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(divisionBoton)
        divisionBoton.appendChild(boton)
        columna.appendChild(tarjeta)
        filaServicios.appendChild(columna)
    })
}