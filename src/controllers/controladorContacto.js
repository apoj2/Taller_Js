
let botonenviarcontacto = document.getElementById("botonenviarcontacto")
botonenviarcontacto.addEventListener("mouseout",function(evento){
    botonenviarcontacto.classList.remove("text-danger")
    botonenviarcontacto.classList.add("text-white","bg-danger")
})
botonenviarcontacto.addEventListener("mouseleave",function(evento){
    botonenviarcontacto.classList.remove("text-white","bg-danger")
    botonenviarcontacto.classList.add("text-danger")
})