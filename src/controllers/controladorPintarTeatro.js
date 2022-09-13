export function pintarTeatros(teatros){

    let fila = document.getElementById("teatros")
    fila.innerHTML=""

    teatros.forEach(function(teatro){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")

        let nombreteatro = document.createElement("h1")
        nombreteatro.textContent=teatro.nombre

        let direccionteatro = document.createElement("h5")
        direccionteatro.textContent="Direccion: "+teatro.direccion

        let numeroteatro = document.createElement("p")
        numeroteatro.textContent="Telefono: "+ teatro.telefono

        tarjeta.appendChild(nombreteatro)
        tarjeta.appendChild(direccionteatro)
        tarjeta.appendChild(numeroteatro)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}