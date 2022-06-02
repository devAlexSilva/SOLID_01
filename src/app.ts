import { app } from './server'

app.get('/', (_req, res) => res.send('documentation with swagger in path:    ...'))