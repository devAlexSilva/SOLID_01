import { IProductRepository, productCreate, productSave } from "./IProductRepository";


class ProductPrismaRepository implements IProductRepository {
    save(data: productCreate): Promise<productSave> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<productSave | undefined> {
        throw new Error("Method not implemented.");
    }
}