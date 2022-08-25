export function pintarPeliculas(pelicula){

	let fila=document.getElementById("fila")
	fila.innerHTML=""

	pelicula.forEach(function(peliculas){
      
		let columna = document.createElement("div")
		columna.classList.add("col","col-12","col-md-2","mx-3","h-50","card","my-3","p-0","columna")

        let tarjeta = document.createElement("div")
		tarjeta.classList.add("card-img-overlay","w-75","h-75","shadow","columna")

		let imagen = document.createElement('img')
		imagen.classList.add("img-fluid","columna","rounded")
		imagen.src=peliculas.foto

		let nombre = document.createElement("h2")
		nombre.classList.add("fw-bold","fs-6","card-text","text-white")
		nombre.textContent=peliculas.Nombre

		let duracion=document.createElement("h4")
		duracion.classList.add("card-text","text-light","fw-bold")
		duracion.textContent=peliculas.Duracion



		
		tarjeta.appendChild(nombre)
		tarjeta.appendChild(duracion)
		columna.appendChild(imagen)
        columna.appendChild(tarjeta)
		fila.appendChild(columna)
	})
}