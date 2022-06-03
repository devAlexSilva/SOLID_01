import { Router } from 'express'
import { ProductCreateController } from './modules/products/controller/ProductCreateController'


const route = Router()
const product = new ProductCreateController()

route.post('/products', product.create)


export { route }