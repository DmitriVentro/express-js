import express from 'express';
import path from 'path'
import { requestTime, logger } from './middlewares.js'
import serverRoutes from './routes/servers.js'
const PORT = 3000
const __dirname = path.resolve()
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)
app.get(`/`, (req, res) =>{
    res.render('index', {title: 'Main Page',  active: 'features'})
})

app.get(`/features`, (req, res) => {
    res.render('features', {title: 'Features Page', active: 'main'})
})


app.listen(PORT, () => {
    console.log(`server has been started on ${PORT}...`);
})