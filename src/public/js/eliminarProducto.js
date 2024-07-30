const btnEliminarProducto = document.querySelectorAll('.btnEliminarProducto')

const deleteProducto = (e) => {
    e.preventDefault()
    const idProduct = e.target.getAttribute('data-index-number')
    //console.log(idProduct)
    llamandoAPI(idProduct)
}

btnEliminarProducto.forEach((btn) => {
    btn.addEventListener('click', deleteProducto)
})


const llamandoAPI = async (idProduct) => {
	const options = {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		cache: 'no-cache'
	}
	const respuesta = await fetch(`/api/productos?id=${idProduct}`,options)
	const res = await respuesta.json()
	res == 1 ? window.location.href = "/api/productos" : alert('Error no pudimos eliminar este producto')
}
