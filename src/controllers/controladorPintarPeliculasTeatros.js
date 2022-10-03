export function pintarPeliculasTeatros(filasTeatro,peliculas){

    let filaPeliculasTeatros= document.getElementById(filasTeatro)
    filaPeliculasTeatros.innerHTML=""

    peliculas.forEach(function(pelicula){

        let columnaPT = document.createElement("div","tarjetaPT")
        columnaPT.classList.add("col","my-2")

        let fila1PT = document.createElement("div")
        fila1PT.classList.add("row","row-cols-12","row-cols-md-2","w-100","bg-white","p-2","pointer","tarjetaPT")

        let columnaf1_1PT = document.createElement("div")
        columnaf1_1PT.classList.add("col","col-12","col-md-4","mx-auto","m-xxl-auto","d-block")

        let columnaf1_2PT = document.createElement("div")
        columnaf1_2PT.classList.add("col","col-12","col-md-8","mx-auto","m-xxl-auto","d-block")

        let imagenPT = document.createElement("img")
        imagenPT.classList.add("img-fluid","w-100","h-100")
        imagenPT.src=pelicula.foto

        let tituloPT =document.createElement("p")
        tituloPT.classList.add("fw-bold")
        tituloPT.textContent="TITULO:"

        let nombrePT = document.createElement("h2")
        nombrePT.classList.add("fs-PT")
        nombrePT.textContent="Título: "+ pelicula.nombre

        let nombreOriginalPT = document.createElement("h5")
        nombreOriginalPT.classList.add("fs-PT")
        nombreOriginalPT.textContent="Título Original: "+pelicula.nombreOriginal

        let fechaDeEstrenoPT = document.createElement("h6")
        fechaDeEstrenoPT.classList.add("fs-PT")
        fechaDeEstrenoPT.textContent="Fecha de estreno: "+pelicula.fechaDeLanzamiento

        let clasificacionPT = document.createElement("h3")
        clasificacionPT.classList.add("fs-PT")
        clasificacionPT.textContent="Clasificación: "+pelicula.clasificacion

        let duracionPT = document.createElement("h4")
        duracionPT.classList.add("fs-PT")
        duracionPT.textContent="Duración: "+pelicula.duracion

        let generoPT = document.createElement("h1")
        generoPT.classList.add("fs-PT")
        generoPT.textContent="Género: "+pelicula.genero

        let paisPT = document.createElement("p")
		paisPT.classList.add("d-none")
		paisPT.textContent=pelicula.pais

		let descripcionPT = document.createElement("label")
		descripcionPT.classList.add("d-none")
		descripcionPT.textContent=pelicula.descripcion
		
        let videoPT = document.createElement("iframe")
		videoPT.classList.add("d-none")
		videoPT.src=pelicula.video

        let fila2PT = document.createElement("div")
        fila2PT.classList.add("row","row-cols-12","row-cols-md-12","w-100","bg-black","text-white")

        let columnaf2_1PT = document.createElement("div")
        columnaf2_1PT.classList.add("col","text-center")
        
        let logo2dPT = document.createElement("p")
        logo2dPT.classList.add("p-3","bg-danger","w-25","mx-auto","mt-4")
        logo2dPT.textContent="2D"

        let idiomaPT = document.createElement("p")
        idiomaPT.classList.add("fs-6")
        idiomaPT.textContent="Doblada"

        let logoRelojPT = document.createElement("i")
        logoRelojPT.classList.add("bi","bi-clock","text-danger")

        let tipoAscientoPT = document.createElement("p")
        tipoAscientoPT.classList.add("fs-5")
        tipoAscientoPT.textContent="General"

        let horaPT = document.createElement("p")
        horaPT.classList.add("bg-dark","p-2","w-25","mx-auto","d-block","m-xxl-auto")
        horaPT.textContent="2:50 pm"



        columnaf1_1PT.appendChild(imagenPT)
        columnaf1_2PT.appendChild(nombrePT)
        columnaf1_2PT.appendChild(nombreOriginalPT)
        columnaf1_2PT.appendChild(fechaDeEstrenoPT)
        columnaf1_2PT.appendChild(clasificacionPT)
        columnaf1_2PT.appendChild(duracionPT)
        columnaf1_2PT.appendChild(generoPT)
        columnaf1_2PT.appendChild(paisPT)
        columnaf1_2PT.appendChild(descripcionPT)
        columnaf1_2PT.appendChild(videoPT)
        columnaf2_1PT.appendChild(logo2dPT)
        columnaf2_1PT.appendChild(idiomaPT)
        columnaf2_1PT.appendChild(logoRelojPT)
        columnaf2_1PT.appendChild(tipoAscientoPT)
        columnaf2_1PT.appendChild(horaPT)
        fila1PT.appendChild(columnaf1_1PT)
        fila1PT.appendChild(columnaf1_2PT)
        fila2PT.appendChild(columnaf2_1PT)
        columnaPT.appendChild(fila1PT)
        columnaPT.appendChild(fila2PT)
        filaPeliculasTeatros.appendChild(columnaPT)
})
}