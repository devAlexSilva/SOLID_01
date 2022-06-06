import { Request, Response } from "express";
import { ProductPrismaRepository } from "../entities/IProductPrismaRepository";
import { GetByNameProductService } from "../service/ProductGetByNameService";


type nameQuery = {
    name: string
}

class ProductGetByNameController {

    async handle(req: Request, res: Response) {
        const repository = new ProductPrismaRepository()
        const productQuery = new GetByNameProductService(repository)

        const { name } = req.query as nameQuery

        const product = await productQuery.handle(name)
        return res.json(product)

    }
}


export { ProductGetByNameController }