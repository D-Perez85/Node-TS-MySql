import { Request, Response } from "express";
import Product from '../models/products';


export const getProducts = async(req :  Request, res: Response)=>{
    const products = await Product.findAll(); 
    res.status(200).json({products}); 
    console.log('OKARDO');
    
}


