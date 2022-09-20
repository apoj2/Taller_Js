export function pintarPeliculas(pelicula){

	let fila=document.getElementById("fila")
	fila.innerHTML=""

	pelicula.forEach(function(peliculas){
      
		let columna = document.createElement("div")
		columna.classList.add("col","col-12","col-md-2","card","p-0","columna","tarjeta2","pointer")

        let tarjeta = document.createElement("div")
		tarjeta.classList.add("card-img-overlay","shadow","columna","tarjeta","pointer")

		let imagen = document.createElement('img')
		imagen.classList.add("img-fluid","columna","rounded","h-100")
		imagen.src=peliculas.url

		let nombre = document.createElement("h2")
		nombre.classList.add("fw-bold","fs-6","card-text","text-black")
		nombre.textContent=peliculas.title

		let duracion=document.createElement("h4")
		duracion.classList.add("card-text","text-dark","fw-bold")
		duracion.textContent=peliculas.id



		
		tarjeta.appendChild(nombre)
		tarjeta.appendChild(duracion)
		columna.appendChild(imagen)
        columna.appendChild(tarjeta)
		fila.appendChild(columna)
	})
}