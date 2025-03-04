const express = require('express');
const router = express.Router();
const {
    createProduct,
    getproducts,
    getProductById,
    updateproduct,
    deleteproduct,
} = require('../controller/productcontroller');

router.post('/', createProduct);
router.get('/', getproducts);
router.get('/:id', getProductById);
router.put('/:id', updateproduct);
router.delete('/:id', deleteproduct);

module.exports = router;