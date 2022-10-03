export function objetoServicioAmpliado(evento){

    let objetoAmpliado = {
        titulo:evento.target.parentElement.querySelector("h5").textContent,
        descripcion2:evento.target.parentElement.querySelector("h6").textContent,
        foto:evento.target.parentElement.querySelector("img").src,
        video:evento.target.parentElement.querySelector("iframe").src
    }

    return objetoAmpliado
}