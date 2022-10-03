import {serviciosDB} from '../helpers/databaseServicios.js'

import {pintarServiciosN} from './controladorPintarServiciosN.js'

import {objetoServicioAmpliado} from './controladorAmpliarServicios.js'

pintarServiciosN(serviciosDB)

let filaServicios= document.getElementById("filaServicios")

filaServicios.addEventListener("click",function(evento){

    if(evento.target.parentElement.classList.contains("tarjetaS")){

      let objetoServicioampliado = objetoServicioAmpliado(evento)

      sessionStorage.setItem('objetoServicioAmpliado',JSON.stringify(objetoServicioampliado))

      window.location.href="./serviciosAmpliados.html"
    }
})