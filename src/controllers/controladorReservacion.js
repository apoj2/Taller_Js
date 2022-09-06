import {pintarPuestos} from './controladorPintarPuestos.js'
import {puestosdb} from '../helpers/databasePuestos.js'

pintarPuestos(puestosdb)

let fila_reservacion =document.getElementById("fila_reservacion")

localStorage.getItem('puestoseleccionado')
fila_reservacion.addEventListener("click",function(evento){


	if(evento.target.parentElement.classList.contains("tarjeta") == true){

       
	}


	
})