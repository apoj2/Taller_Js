export function pintarServicios(servicios){

    let filaServicios = document.getElementById("filaServicios")
    filaServicios.innerHTML=""

    servicios.forEach(function(servicio){
        
      if(servicio.lado==1){
        let columna = document.createElement("div")
        columna.classList.add("col","col-12","col-md-12","d-flex","w-100","pointer","tarjetaS")

        let columna1 = document.createElement("div")
        columna1.classList.add("col","w-100","p-3")

        let columna2 = document.createElement("div")
        columna2.classList.add("col","w-100","p-3")

        let nombre = document.createElement("h5")
        nombre.textContent=servicio.titulo

        let nombre2 = document.createElement("p")
        nombre2.classList.add("text-secondary")
        nombre2.textContent=servicio.titulo2

        let descripcion = document.createElement("p")
        descripcion.textContent=servicio.descripcion

        let btnmasinfo = document.createElement("a")
        btnmasinfo.classList.add("btn","border-danger","border-3","text-danger","fw-bold","my-2","fs-6","w-50","mx-auto","d-block","m-xxl-auto")
        btnmasinfo.textContent="+ VER MAS "

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=servicio.foto

        columna1.appendChild(nombre)
        columna1.appendChild(nombre2)
        columna1.appendChild(descripcion)
        columna1.appendChild(btnmasinfo)
        columna2.appendChild(imagen)
        columna.appendChild(columna1)
        columna.appendChild(columna2)
        filaServicios.appendChild(columna)
      }
      if(servicio.lado==2){
        let columna = document.createElement("div")
        columna.classList.add("col","col-12","col-md-12","d-flex","w-100","pointer","tarjetaS")

        let columna1 = document.createElement("div")
        columna1.classList.add("col","w-100","p-3")

        let columna2 = document.createElement("div")
        columna2.classList.add("col","w-100","p-3")

        let nombre = document.createElement("h5")
        nombre.textContent=servicio.titulo

        let nombre2 = document.createElement("p")
        nombre2.classList.add("text-secondary")
        nombre2.textContent=servicio.titulo2

        let descripcion = document.createElement("p")
        descripcion.textContent=servicio.descripcion

        let btnmasinfo = document.createElement("a")
        btnmasinfo.classList.add("btn","border-danger","border-3","text-danger","fw-bold","my-2","fs-6","w-50","mx-auto","d-block","m-xxl-auto")
        btnmasinfo.textContent="+ VER MAS"

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=servicio.foto

        columna1.appendChild(imagen)
        columna2.appendChild(nombre)
        columna2.appendChild(nombre2)
        columna2.appendChild(descripcion)
        columna2.appendChild(btnmasinfo)
        columna.appendChild(columna1)
        columna.appendChild(columna2)
        filaServicios.appendChild(columna)
      }

    })

}