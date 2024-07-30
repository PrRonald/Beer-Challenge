import products from "./items/products.js"
import express from "express"
import stockPrice from "./items/stock-price.js"
import cors from "cors"

const app = express()
app.use(cors());

app.get("/products", (req, res) => {
    res.send(products)
    const origin = req.headers.origin;
    console.log("the products sent to " + origin)
})

app.get("/stockPrice", (req, res) => {
    res.send(stockPrice)
    const origin = req.headers.origin;
    console.log("the stockPrice sent to " + origin)
})

app.get("/stockPrice/:sku", (req, res) => {
    console.log(req.params.id + " 1")
    const skuKey = req.params.sku;
    const sku = stockPrice[skuKey]

    if (!sku) {
        res.status(404).send(`the item "${skuKey}" dos not exist`)
    }
    if (sku) {
        res.send(stockPrice[req.params.sku])
    }

    const origin = req.headers.origin;
    console.log("the stockPrice sent to " + origin)
})

app.listen(3000, () => {
    console.log("server listening in port 3000")
})