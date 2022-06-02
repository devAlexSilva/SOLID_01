export type productCreate = {
    name: string,
    price: number,
    categories: [number]
}

export type productSave = {
    id: string
    name: string,
    price: number,
    categories: [number],
}

export interface IProductRepository {
    save(data: productCreate): Promise<productSave>
    findById(id: string): Promise<productSave | undefined>
}