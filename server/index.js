import express from 'express'
import cors from 'cors'
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes)

const PORT = 8000

Connection()
app.listen(PORT, () => console.log(`your server is running at ${PORT}`))