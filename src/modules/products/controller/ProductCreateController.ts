import { Request, Response } from "express";
import { ProductPrismaRepository } from "../entities/IProductPrismaRepository";
import { CreateProductService } from "../service/ProductCreateService";


class ProductCreateController {

    async create(req: Request, res: Response) {
        const repository = new ProductPrismaRepository()
        const productCreate = new CreateProductService(repository)

        const product = await productCreate.execute(req.body)

        return res.json(product)
    }
}


export { ProductCreateController }