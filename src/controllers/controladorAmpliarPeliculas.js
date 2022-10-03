export function ampliarPeliculas(evento){

    let objetoAmpliado ={
        descripcion:evento.target.parentElement.querySelector("label").textContent,
        nombre:evento.target.parentElement.querySelector("h2").textContent,
        duracion:evento.target.parentElement.querySelector("h4").textContent,
        nombreOriginal:evento.target.parentElement.querySelector("h5").textContent,
        fechaDeEstreno:evento.target.parentElement.querySelector("h6").textContent,
        clasificacion:evento.target.parentElement.querySelector("h3").textContent,
        genero:evento.target.parentElement.querySelector("h1").textContent,
        pais:evento.target.parentElement.querySelector("p").textContent,
        video:evento.target.parentElement.querySelector("iframe").src,
        foto:evento.target.parentElement.querySelector("img").src
    }

    return objetoAmpliado
}