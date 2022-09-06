export function pintarPuestos(puestos){

	let fila_reservacion= document.getElementById("fila_reservacion")
	fila_reservacion.innerHTML=""

	puestos.forEach(function(puesto){

		let columna = document.createElement("div")
		columna.classList.add("col","p-2")

		let tarjeta = document.createElement("div")
		tarjeta.classList.add("rounded-circle","card","w-50","tarjeta","pointer","mx-auto","m-xxl-auto","d-block")

		tarjeta.addEventListener("click",function(evento){
			tarjeta.classList.remove("bg-danger")
			tarjeta.classList.add("bg-success")
			
			let colortarjeta = tarjeta
			localStorage.setItem('puestoseleccionado',colortarjeta)
			localStorage.getItem('puestoseleccionado')
		  })
		  tarjeta.addEventListener("dblclick",function(evento){
			tarjeta.classList.add("bg-danger")
			let colortarjeta = tarjeta
			localStorage.setItem('puestoseleccionado',colortarjeta)
			localStorage.getItem('puestoseleccionado')
		  })
		tarjeta.addEventListener("mouseover",function(evento){
          tarjeta.classList.add("shadow")
		})
		tarjeta.addEventListener("mouseleave",function(evento){
			tarjeta.classList.remove("shadow")
		  })

		let nombre = document.createElement("h1")
		nombre.classList.add("text-center","text-dark","p-3")
		nombre.textContent=puesto.puesto



		tarjeta.appendChild(nombre)
		columna.appendChild(tarjeta)
		fila_reservacion.appendChild(columna)
	})
}