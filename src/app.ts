import express from 'express'
import { app } from './server'
import { route } from './routes'


app.use(express.json())
app.get('/', (_req, res) => res.send('documentation with swagger in path:    ...'))

app.use(route)