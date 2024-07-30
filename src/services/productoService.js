import config from '../config/knexConfig.js'
import knex from 'knex'
export default class ProductService{
    constructor(){
        this.knex = knex(config)
    }

    getProductos = async() =>{
        const productos = await this.knex.from('productos').select('*')
        return Object.values(JSON.parse(JSON.stringify(productos)))
    }

    addProducto = async(producto) => {
        return this.knex('productos').insert(producto)
    }

    updateProductoById = async(id,producto) => {
        return this.knex('productos').where({producto_id:id}).update(producto);
    }

    deleteProductoById = async(id) => {
        return this.knex('productos').where({producto_id:id}).del();
    }

    showProductoById = async(id) => {
        return await this.knex('productos').where({producto_id:id}).select('*').first();
    }

}
