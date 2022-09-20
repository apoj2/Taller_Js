const URI = "https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
const URI2="https://api.themoviedb.org/3/movie/550?api_key=ed213eb4d004fd81433b134c1ccb4e04"

const TOKEN ="Bearer ed213eb4d004fd81433b134c1ccb4e04"

const PETICION = {
    method:"get",
    headers:{
        Authorization:TOKEN,
        "Content-Type": "application/json;charset=utf-8"
    }
}

export async function activarservicio(){
    let resultado = await fetch(URI)
    return await resultado
}
activarservicio()

export async function activarservicio2(){
    let resultado = await fetch(URI2)
    return await resultado.json()
}

console.log(await activarservicio())