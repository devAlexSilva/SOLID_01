import { prisma } from "../../../db/prismaClient/prisma";
import { IProductRepository, productCreate, productSave } from "./IProductRepository";
// aqui é onde de fato realizamos a conexão com o ORM
// devido a existência de tal dependência com elemtnos externos (ORM)
// utilizamos essa interface como desacoplamento, então se mudarmos o ORM
// mudaremos essa interface mantendo a implementação da interface `IProductRepository`

class ProductPrismaRepository implements IProductRepository {
    async save(data: productCreate): Promise<productSave> {
        const { name, price, categories } = data

        const product = await prisma.product.create({
            data: {
                name,
                price,
                categories: {
                    create: [
                        {
                            assignedAt: new Date(),
                            category: {
                                connect: {
                                    id: categories
                                }
                            }
                        }
                    ]
                }
            }
        })
        return product
    }
    
    async findByName(name: string): Promise<productSave | null> {
        const product = await prisma.product.findFirst({
            where: { name }
        })
        return product
    }
}

export { ProductPrismaRepository }