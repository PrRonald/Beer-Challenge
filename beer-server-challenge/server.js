import products from "./items/products.js"
import express from "express"
import stockPrice from "./items/stock-price.js"
import cors from "cors"

const app = express()
app.use(cors());

app.get("/products", (req, res) =>{
    res.send(products)
    const origin = req.headers.origin;
    console.log("the products sent to " + origin )
})

app.get("/stockPrice", (req, res) =>{
    res.send(stockPrice)
    const origin = req.headers.origin;
    console.log("the stockPrice sent to " + origin)
})
app.listen(3000, () => {
    console.log("server listening in port 3000")
})