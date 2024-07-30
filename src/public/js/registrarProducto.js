const mje = document.querySelector('#nuevoProducto')
document.querySelector('#formRegistrarProducto').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
      	new FormData(e.target)
    )
    llamandoAPI(data)
})

const llamandoAPI = async (data) => {
	const options = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
        body:JSON.stringify(data),
		cache: 'no-cache'
	}
	const respuesta = await fetch(`/api/productos/`,options)
	const res = await respuesta.json()
	res > 0 ? mje.innerHTML='ok' : mje.innerHTML='error'
}