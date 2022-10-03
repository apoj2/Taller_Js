import {pintarTeatros} from './controladorPintarTeatro.js'
import {teatrosDB} from '../helpers/databaseTeatros.js'

pintarTeatros(teatrosDB)

let filaTeatros = document.getElementById("teatros")

filaTeatros.addEventListener("click",function(evento){

    if(evento.target.parentElement.classList.contains("card")){
        window.location.href="./teatrosAmpliados.html"
    }

})