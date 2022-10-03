import {peliculasDB} from '../helpers/databasePeliculas.js'
import {categoriasDB} from '../helpers/databaseCategoriaPeliculas.js'

import {pintarBotonesCategorias} from './controladorBotonesCategorias.js'
import {pintarPeliculas} from './controladorPintarPeliculas.js'

import {activarservicio,activarservicio2} from './controladorMoviedb.js'

import {ampliarPeliculas} from './controladorAmpliarPeliculas.js'

let peliculas = await activarservicio()
let nombre = await activarservicio2()
console.log(peliculas.url)
console.log(nombre.title)

pintarBotonesCategorias(categoriasDB)
pintarPeliculas(peliculasDB)



let botonInformacionPeliculas=document.getElementById("btn-informacion-peliculas")
botonInformacionPeliculas.addEventListener("mouseout",function(evento){

	botonInformacionPeliculas.classList.remove("text-white")
	botonInformacionPeliculas.classList.add("text-dark")
})
botonInformacionPeliculas.addEventListener("mouseleave",function(evento){
	botonInformacionPeliculas.classList.remove("text-dark")
	botonInformacionPeliculas.classList.add("text-white")
})



let fila = document.getElementById("fila")
fila.addEventListener("click",function(evento){

	if(evento.target.parentElement.classList.contains("tarjeta2") == true ){
      
		let objetoPeliculaAmpliado = ampliarPeliculas(evento)
	
		sessionStorage.setItem('objetopeliculaAmpliado',JSON.stringify(objetoPeliculaAmpliado))
	    
		console.log(JSON.parse(sessionStorage.getItem('objetopeliculaAmpliado')))

		
		
		window.location.href="./peliculasAmpliadas.html"
	}

})
