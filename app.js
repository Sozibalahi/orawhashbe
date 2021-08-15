const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = 3000
app.use(express.static(__dirname+"/public"))
const static_path = path.join(__dirname, "./public");
const viewengine = path.join(__dirname,"views");
const paritals = path.join(__dirname,"views/partials");
app.set('view engine', "hbs");
app.set("views" , viewengine)
hbs.registerPartials(paritals);

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/services', (req, res) => {
    res.render('services')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})