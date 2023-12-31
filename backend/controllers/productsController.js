const Product = require("../models/Product")


module.exports = {
    createProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body)
            await newProduct.save()
            res.status(200).json('Product successfully added')
        } catch (error) {
            res.status(500).json({ error: "Failed to add product", details: error })
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 })
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("Failed to fetch products")
        }
    },

    getProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json("Failed to get product")
        }
    },

    searchProduct: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                        $search: {
                            index: "furniture",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            )
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("Failed to geet products")
        }
    }
}


