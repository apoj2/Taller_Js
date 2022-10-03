export function pintarTeatros(teatros){

    let fila = document.getElementById("teatros")
    fila.innerHTML=""


    teatros.forEach(function(teatro){

        let columna = document.createElement("div")
        columna.classList.add("col","my-3","tarjetaT")
        columna.addEventListener("mouseout",function(evento){
            columna.classList.add("border-bottom","border-danger","border-4")
        })
        columna.addEventListener("mouseleave",function(evento){
            columna.classList.remove("border-bottom","border-danger","border-4")
        })

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("w-100","card","pointer")
     

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","grayscale-teatros")
        imagen.src=teatro.url

     

        let sobretarjeta = document.createElement("div")
        sobretarjeta.classList.add("card-img-overlay","position-absolute","bottom-0","mb-3","start-0","pointer")

        sobretarjeta.addEventListener("mouseout",function(evento){
            columna.classList.add("border-bottom","border-danger","border-4")
        })
        sobretarjeta.addEventListener("mouseleave",function(evento){
            columna.classList.remove("border-bottom","border-danger","border-4")
        })

        let nombreteatro = document.createElement("h5")
        nombreteatro.classList.add("nombre-teatro","d-block","text-white","bg-negro-transparent","w-100","position-absolute","bottom-0","p-2","mt-4","mb-5","start-0")
        nombreteatro.textContent=teatro.nombre


        let direccionteatro = document.createElement("h6")
        direccionteatro.textContent="Direccion: "+teatro.direccion

        let numeroteatro = document.createElement("p")
        numeroteatro.textContent="Telefono: "+ teatro.telefono

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(sobretarjeta)
        sobretarjeta.appendChild(nombreteatro)
        tarjeta.appendChild(direccionteatro)
        tarjeta.appendChild(numeroteatro)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}