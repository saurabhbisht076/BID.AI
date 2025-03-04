const Product = require('../models/productmodel');

// Create product POST /api/products access public 
const createProduct = async (req, res) => {
    try {
      //  console.log(req.body); // Debugging
        const { name, description, price, category, image } = req.body;
        // Validate input
        if (!name || !price) {
            return res.status(400).json({ message: "Name and price are required" });
        }
        const product = new Product({
            name, description, price, category, image
        });
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all products GET /api/products access public
const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single product by id GET /api/products/:id access public    
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a product PUT /api/products/:id access public
const updateproduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, category, image }, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a product DELETE /api/products/:id access public
const deleteproduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.remove();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createProduct, getproducts, getProductById, updateproduct, deleteproduct };