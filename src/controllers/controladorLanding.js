import {ciudadesDB} from '../helpers/databaseCiudades.js'
import {pintarBotonesCiudades} from './controladorPintarBotonesCiudades.js'
import {objetoCiudad} from './controladorObjetoCiudad.js'


let filtrociudades = ciudadesDB.filter(function(ciudades){

    return ciudades.valor != 9
})
console.log(filtrociudades)


pintarBotonesCiudades(filtrociudades)

let filaciudades = document.getElementById("filaciudades")
filaciudades.addEventListener("click",function(evento){
if(evento.target.parentElement.classList.contains("btn")){
    let objetociudad = objetoCiudad(evento)
console.log(objetociudad)

    //window.location.href="../../index.html"
}
})