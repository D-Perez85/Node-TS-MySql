import { Router } from "express";
import { getProduct, getProducts, postProduct, putProduct } from "../controllers/products";

const router = Router(); 

router.get('/', getProducts); 
router.get('/:id', getProduct); 
router.post('/', postProduct); 
router.put('/:id', putProduct);


export default router; 