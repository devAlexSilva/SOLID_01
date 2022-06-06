import { Router } from 'express'
import { ProductCreateController } from './modules/products/controller/ProductCreateController'
import { ProductGetByNameController } from './modules/products/controller/ProductGetByName'


const route = Router()
const productCreate = new ProductCreateController()
const productGetByName = new ProductGetByNameController()

route.post('/products', productCreate.create)
route.get('/products', productGetByName.handle)


export { route }