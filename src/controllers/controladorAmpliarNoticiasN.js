export function objetoNoticiasNAmpliadas(evento){
     
    let objetoNoticiasNampliadas = {
        foto:evento.target.parentElement.querySelector("img").src,
        nombre:evento.target.parentElement.querySelector("h2").textContent,
        nota:evento.target.parentElement.querySelector("p").textContent
    }

    return objetoNoticiasNampliadas
}