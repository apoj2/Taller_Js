import {arreglonumertospositivosynegativos} from '../helpers/database.js'
import {arreglonumertospositivosynegativosObjeto}from '../helpers/database.js'

import {pintarPeliculas} from './controladorPintarPeliculas.js'
import {pintarNoticias} from './controladorPintarNoticias.js'

import {peliculasDB} from '../helpers/databasePeliculas.js'
import {noticiasDB} from '../helpers/databaseNoticas.js'


let filtroNumerosPositivos = arreglonumertospositivosynegativos.filter(function(numeros){
return numeros > 0
})

let filtroNumerosPositivosObjeto=arreglonumertospositivosynegativosObjeto.filter(function(numeros){
return numeros.valor=='positivo'
})

let objetoPeliculaNetflix ={
	Nombre:'Rayo MCweed',
	Duracion:'2:00:00',
	Descripcion:'Es la historia de un auto el cual de joven empieza en el consumo de los alucinogenos y resulta ser el primer atuo volodar que vuela, en una pelicula de accion, drama y cosas fuera de lo comun',
	Genero:{Genero1:'+18',
			Genero2:'Accion',
			Genero3:'Drama'},
	Puntaje:'10',
	Director:'Angel Tobon Perez',
	Actores:'Carlos Arturo Henriquez, Angel Tobon Perez, Maria Eugenia 	Tirimisu',
	FechaDeLanzamiento:'17-09-2020',
	Pais:'Colombia',
	CalidadVisual:'HD',
	Foto:'https://youtube./dopejfpsa8234345/Rayo?=Mcweed'
	
}

pintarNoticias(noticiasDB)


console.log(arreglonumertospositivosynegativos)

console.log(filtroNumerosPositivos)

console.log(filtroNumerosPositivosObjeto)

console.log(objetoPeliculaNetflix)
console.log(objetoPeliculaNetflix.Nombre)
console.log(objetoPeliculaNetflix.Duracion)
console.log(objetoPeliculaNetflix.Descripcion)
console.log(objetoPeliculaNetflix.Genero)
console.log(objetoPeliculaNetflix.Genero.Genero1)
console.log(objetoPeliculaNetflix.Genero.Genero2)
console.log(objetoPeliculaNetflix.Genero.Genero3)
console.log(objetoPeliculaNetflix.Puntaje)
console.log(objetoPeliculaNetflix.Director)
console.log(objetoPeliculaNetflix.Actores)
console.log(objetoPeliculaNetflix.FechaDeLanzamiento)
console.log(objetoPeliculaNetflix.Pais)
console.log(objetoPeliculaNetflix.CalidadVisual)
console.log(objetoPeliculaNetflix.Foto)


let filanoticias = document.getElementById("filanoticias")
filanoticias.addEventListener("click",function(evento){

	if(evento.target.parentElement.classList.contains("col")){
        
		window.location.href
	}
})

let fila = document.getElementById("fila")
fila.addEventListener("click",function(evento){

	if(evento.target.parentElement.classList.contains("tarjeta") == true ){
      window.location.href='./src/views/reservacion.html'
	}

})