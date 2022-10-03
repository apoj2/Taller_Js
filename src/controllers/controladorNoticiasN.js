import {noticiasDB} from '../helpers/databaseNoticas.js' 

import {pintarNoticiasN} from './controladorPintarNoticiasN.js'

import {objetoNoticiasNAmpliadas} from './controladorAmpliarNoticiasN.js'
pintarNoticiasN(noticiasDB)

let filanoticias = document.getElementById("filaNoticias")

filanoticias.addEventListener("click",function(evento){

  
    let objetoNoticiasNampliadas = objetoNoticiasNAmpliadas(evento)

    console.log(objetoNoticiasNampliadas)

    window.location.href="./noticiasAmpliadas.html"
   
})