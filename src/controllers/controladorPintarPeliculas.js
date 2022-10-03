export function pintarPeliculas(peliculas){

	let fila=document.getElementById("fila")
	fila.innerHTML=""

	peliculas.forEach(function(pelicula){
      
		let columnap = document.createElement("div")
		columnap.classList.add("col","col-12","col-md-2","card","p-0","columna","tarjeta2","pointer","rounded-0")

        let tarjetap = document.createElement("div")
		tarjetap.classList.add("card-img-overlay","shadow","columna","tarjeta","pointer")

		let imagenp = document.createElement('img')
		imagenp.classList.add("img-fluid","columna","rounded-0","h-100")
		imagenp.src=pelicula.foto

		let nombrep = document.createElement("h2")
		nombrep.classList.add("fw-bold","fs-6","card-text","text-white")
		nombrep.textContent=pelicula.nombre

		let duracionp=document.createElement("h4")
		duracionp.classList.add("card-text","text-white","fw-bold")
		duracionp.textContent=pelicula.duracion

		let nombreOriginalp = document.createElement("h5")
		nombreOriginalp.classList.add("d-none")
		nombreOriginalp.textContent=pelicula.nombreOriginal

		let fechaDeEstrenop= document.createElement("h6")
		fechaDeEstrenop.classList.add("d-none")
		fechaDeEstrenop.textContent=pelicula.fechaDeLanzamiento

		let clasificacionp = document.createElement("h3")
		clasificacionp.classList.add("d-none")
		clasificacionp.textContent=pelicula.clasificacion

		let generop = document.createElement("h1")
		generop.classList.add("d-none")
		generop.textContent=pelicula.genero[0]

		let paisp = document.createElement("p")
		paisp.classList.add("d-none")
		paisp.textContent=pelicula.pais

		let descripcionp = document.createElement("label")
		descripcionp.classList.add("d-none")
		descripcionp.textContent=pelicula.descripcion
		
        let videop = document.createElement("iframe")
		videop.classList.add("d-none")
		videop.src=pelicula.video




		
		tarjetap.appendChild(nombrep)
		tarjetap.appendChild(duracionp)
		tarjetap.appendChild(nombreOriginalp)
		tarjetap.appendChild(fechaDeEstrenop)
		tarjetap.appendChild(clasificacionp)
		tarjetap.appendChild(generop)
		tarjetap.appendChild(paisp)
		tarjetap.appendChild(videop)
		tarjetap.appendChild(descripcionp)
		columnap.appendChild(imagenp)
        columnap.appendChild(tarjetap)
		fila.appendChild(columnap)
	})
}