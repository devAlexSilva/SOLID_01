import express from 'express'
import { prisma } from './db/prismaClient/prisma'
import { app } from './server'

app.use(express.json())
app.get('/', (_req, res) => res.send('documentation with swagger in path:    ...'))

interface IProduct {
    categoryId?: number
    name: string,
    price: number,
    categories: string

}

app.post('/category', async (req, res) => {
    console.clear()
    console.log(req.body.name)
    try {
        await prisma.category.create({
            data: {
                name: req.body.name
            }
        })
        res.sendStatus(201)
    }
    catch (err) {
        res.sendStatus(400)
    }
})

app.post('/product', async (req, res) => {
    console.clear()
    console.log(req.body)
    const body: IProduct = req.body
    
    try {
        await prisma.product.create({
            data: {
                name: body.name,
                price: body.price,
                categories: {
                    create: [
                        {
                            assignedAt: new Date(),
                            category: {
                                connect: {
                                    id: body.categoryId
                                }
                            }
                        }
                    ]
                }
            }
        })
        res.sendStatus(201)
    }
    catch (err) {
        res.sendStatus(400)
    }
})