import { IProductRepository, productCreate } from "../entities/IProductRepository";


class CreateProductService {

    constructor(private productRepository: IProductRepository) { }

    async execute(data: productCreate) {
        const existsProduct = await this.productRepository.findByName(data.name)

        if (existsProduct) throw new Error('this product already exists')

        try {
            const productCreated = await this.productRepository.save(data)
            return productCreated
        }
        catch (err) {
            throw new Error('failed on create')
        }
    }
}


export { CreateProductService }