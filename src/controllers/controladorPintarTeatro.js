export function pintarTeatros(teatros){

    let fila = document.getElementById("teatros")
    fila.innerHTML=""

    teatros.forEach(function(teatro){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("w-100")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=teatro.url

        let nombreteatro = document.createElement("h1")
        nombreteatro.classList.add("nombre-teatro")
        nombreteatro.textContent=teatro.nombre

        let direccionteatro = document.createElement("h6")
        direccionteatro.textContent="Direccion: "+teatro.direccion

        let numeroteatro = document.createElement("p")
        numeroteatro.textContent="Telefono: "+ teatro.telefono

        tarjeta.appendChild(imagen)
        imagen.appendChild(nombreteatro)
        tarjeta.appendChild(direccionteatro)
        tarjeta.appendChild(numeroteatro)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}