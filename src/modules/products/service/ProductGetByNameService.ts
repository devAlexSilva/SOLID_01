import { IProductRepository } from "../entities/IProductRepository";


class GetByNameProductService {

    constructor(private productRepository: IProductRepository) { }

    async handle(name: string) {
        if(!name) throw new Error('name in params is required')
        
        const existsProduct = await this.productRepository.findByName(name)

        if (!existsProduct) throw new Error('this product does not exists')

        return existsProduct
    }
}


export { GetByNameProductService }