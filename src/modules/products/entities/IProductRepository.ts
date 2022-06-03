export type productCreate = {
    name: string,
    price: number,
    categories: number
}

export type productSave = {
    id: string
    name: string,
    price: number,
    categories?: Array<number>,
}

export interface IProductRepository {
    save(data: productCreate): Promise<productSave>
    findByName(name: string): Promise<productSave | null>
}