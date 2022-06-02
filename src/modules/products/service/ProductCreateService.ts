import { IProductRepository, productCreate } from "../entities/IProductRepository";


class CreateProductService {

    constructor(productRepository: IProductRepository) {}

    async execute(data: productCreate) {

    }
}

export { CreateProductService }