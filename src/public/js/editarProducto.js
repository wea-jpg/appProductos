const mje = document.querySelector('#actualizarProducto')
document.querySelector('#formEditarProducto').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
      	new FormData(e.target)
    )
    //console.log(data)
    llamandoAPI(data)
})

const llamandoAPI = async (data) => {
	const options = {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
        body:JSON.stringify(data),
		cache: 'no-cache'
	}
	const respuesta = await fetch(`/api/productos/${data.producto_id}`,options)
	const res = await respuesta.json()
	res > 0 ? mje.innerHTML='ok' : mje.innerHTML='error'
}