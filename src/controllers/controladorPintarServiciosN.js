export function pintarServiciosN(servicios){

    let filaServicios = document.getElementById("filaServicios")
    filaServicios.innerHTML=""

    servicios.forEach(function(servicio){

        let columnaS = document.createElement("div")
        columnaS.classList.add("col","my-2","tarjetaS")

        let tarjetaS = document.createElement("div")
        tarjetaS.classList.add("w-100","shadow","pointer","tarjetaS")

        let imagenS = document.createElement("img")
        imagenS.classList.add("img-fluid","w-100","grayscale")
        imagenS.src=servicio.foto

        let videoS = document.createElement("iframe")
        videoS.classList.add("d-none")
        videoS.src=servicio.video

        let nombreS = document.createElement("h5")
        nombreS.classList.add("mx-3","mt-2","fw-bold")
        nombreS.textContent=servicio.titulo

        let separadorS=document.createElement("p")
        separadorS.classList.add("mx-3")
        separadorS.textContent="--------------------------------------------------"
        

        

        let descripcionS = document.createElement("p")
        descripcionS.classList.add("mx-3")
        descripcionS.textContent=servicio.descripcion

        let descripcion2S = document.createElement("h6")
        descripcion2S.classList.add("mx-3","d-none")
        descripcion2S.textContent=servicio.descripcion2
         
        let divisionBotonS = document.createElement("div","tarjetaS")


        let botonS =document.createElement("a")
        botonS.classList.add("text-danger","nav-link","pointer","p-3","text-center")
        botonS.textContent="+ MAS INFORMACION"
        
        botonS.addEventListener("mouseout",function(evento){
            botonS.classList.remove("nav-link")
        })
        botonS.addEventListener("mouseleave",function(evento){
            botonS.classList.add("nav-link")
        })

        tarjetaS.appendChild(imagenS)
        tarjetaS.appendChild(videoS)
        tarjetaS.appendChild(nombreS)
        tarjetaS.appendChild(separadorS)
        tarjetaS.appendChild(descripcionS)
        tarjetaS.appendChild(descripcion2S)
        tarjetaS.appendChild(divisionBotonS)
        divisionBotonS.appendChild(botonS)
        columnaS.appendChild(tarjetaS)
        filaServicios.appendChild(columnaS)
    })
}