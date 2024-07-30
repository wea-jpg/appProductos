import {Router} from 'express'
const router = Router()

import ProductService from '../services/productoService.js'
const Producto = new ProductService()

router.get('/',async(req,res) => {
    try {
        const productos = await Producto.getProductos()
        return res.render('productos/index',{productos})
    } catch (err) {
        console.log('error'+err)
    }
})

router.post('/',async(req,res) => {
    try {

        const id = req.params
        const producto = req.body
        const respuesta = await producto.updateProductoById(id,producto)
        return res.status(200).json(respuesta)
    } catch (err) {
        console.log('error'+err)
    }
})
    router.put('/:id',async(req,res) => {
        try {
            console.log("hola")
            const {id} = req.params
            const producto = req.body
            const respuesta = await Producto.updateProductoById(id,producto)
            return res.status(200).json(respuesta)              
        } catch (err) {
            console.log('error'+err)
        }     
})    
    router.get('/show',async(req,res) => {
        try {
            const {id} = req.query
            const respuesta = await Producto.showProductoById(id)
            return res.status(200).json(respuesta)
        } catch (err) {
            console.log('error'+err)
        }
    
 })   

    router.delete('/:id',async(req,res) => {
        try {
            const {id} = req.params
            const respuesta = await Producto.deleteProductoById(id)
            return res.status(200).json(respuesta)
        } catch (err) {
            console.log('error'+err)
        }
    

})    

router.get('/create',async(req,res) => {
    try {
        return res.render('productos/create')
    } catch (err) {
        console.log('error'+err)
    }
})


    export default router