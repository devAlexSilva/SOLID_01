import { prisma } from "../../../db/prismaClient/prisma";
import { IProductRepository, productCreate, productSave } from "./IProductRepository";
// aqui é onde de fato realizamos a conexão com o ORM
// devido a existência de tal dependência com elemtnos externos (ORM)
// utilizamos essa interface como desacoplamento, então se mudarmos o ORM
// mudaremos essa interface mantendo a implementação da interface `IProductRepository`

class ProductPrismaRepository implements IProductRepository {
    save(data: productCreate): Promise<productSave> {
        throw new Error("Method not implemented.");
    }
    async findByName(id: string): Promise<productSave | null> {
        const product = await prisma.product.findFirst({
            where: { id }
        })
        return product
    }
}

export { ProductPrismaRepository }