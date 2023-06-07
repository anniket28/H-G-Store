// Backend for Health and Gen Store

// Required Packages
const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const connection = require('./database')
const Products = require('./Models/Products')

// Delaring App
const app = express()

// Initialising Port
const port = 4000

// App Set
app.set('view-engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// App Use
app.use('/static', express.static('static'))
app.use(urlencoded({ extended: false }))

// Get Home Page
app.get('', (req, res) => {
    res.status(200).render('index.ejs', { title: 'Home' })
})

// Get About Page
app.get('/about-us', (req, res) => {
    res.status(200).render('about.ejs', { title: 'About Us' })
})

// Get Products Page 
app.get('/products/:category', async (req, res) => {
    try {
        // Fetch Products From Database
        let category = req.params.category
        let categoryView = category[0].toUpperCase() + category.slice(1)
        category = category.toUpperCase()
        Products.find({ category: category }, function (err, allProducts) {
            if (err) {
                console.log(err)
            }
            res.status(200).render('products.ejs', { title: 'Products', allProducts: allProducts, categoryView: categoryView })
        })
    }
    catch (error) {
        console.log(error)
        res.send('<h1 style="text-align: center;">Internal Server Error</h1>')
    }
})

// Get Product Info Page
app.get('/product-display/:productid', async (req, res) => {
    try {
        let productId = req.params.productid
        Products.findById(productId, function (err, product) {
            if (err) {
                console.log(err)
            }
            res.status(200).render('productDisplay.ejs', { title: product.name, product: product })
        })
    }
    catch (error) {
        console.log(error)
        res.send('<h1 style="text-align: center;">Internal Server Error</h1>')
    }
})


// App Listen
app.listen(port, () => {
    console.log('Running at ' + port)
})