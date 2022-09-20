export function objetoCiudad(evento){

    let objetociudad={
      nombre:evento.target.parentElement.querySelector("h6").textContent
    }

    return objetociudad
}