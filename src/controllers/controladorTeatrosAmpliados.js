import {pintarPeliculasTeatros} from './controladorPintarPeliculasTeatros.js'
import {peliculasDB} from '../helpers/databasePeliculas.js'
import {ampliarPeliculas} from './controladorAmpliarPeliculas.js'

pintarPeliculasTeatros("filaPeliculasTeatro",peliculasDB)
pintarPeliculasTeatros("filaPeliculasTeatro2",peliculasDB)

let filaPeliculasTeatro = document.getElementById("filaPeliculasTeatro")

filaPeliculasTeatro.addEventListener("click",function(evento){

    if(evento.target.parentElement.classList.contains("tarjetaPT")){

        let objetoPeliculaAmpliado = ampliarPeliculas(evento)

       	
		sessionStorage.setItem('objetopeliculaAmpliado',JSON.stringify(objetoPeliculaAmpliado))
	    
		console.log(JSON.parse(sessionStorage.getItem('objetopeliculaAmpliado')))

		
		
		window.location.href="./peliculasAmpliadas.html"
    }
})