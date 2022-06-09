import { Request, Response } from "express";
import Product from '../models/products';


export const getProducts = async(req :  Request, res: Response)=>{
    const products = await Product.findAll(); 
    res.status(200).json({products}); 
}

export const getProduct = async(req :  Request, res: Response)=>{
    const {id} = req.params; 
    const product = await Product.findByPk(id); 
    if (product){
        res.status(200).json({product}); 
     } else {
        res.status(404).json({
          msg: `Controle el  id ingresado (${id}) -  no existe en base de datos`,
        });
}
}
