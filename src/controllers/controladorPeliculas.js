import {peliculasDB} from '../helpers/databasePeliculas.js'
import {pintarPeliculas} from './controladorPintarPeliculas.js'

pintarPeliculas(peliculasDB)
console.log(peliculasDB)

let fila = document.getElementById("fila")
fila.addEventListener("click",function(evento){

	if(evento.target.parentElement.classList.contains("tarjeta") == true ){
      window.location.href='./reservacion.html'
	}

})