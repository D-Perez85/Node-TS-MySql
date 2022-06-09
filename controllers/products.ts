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
export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
      try {
          const existe = await Product.findOne({where: {nombre: body.nombre}});
          if (existe) {
              return res.status(400).json({
                msg: "Ya existe un producto con el nombre " + body.nombre,
              });
            }
        const product = await Product.create(body);
        product.save();
        res.json(product);
        }catch (error) {
          console.log(error);
          res.status(500).json({
            msg: "Hable con el administrador",
          });
      }
    };
export const putProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req
        try {
        const product = await Product.findByPk(id);
            if (!product) {
            return res.status(404).json({
                msg: "No existe un product con el id " + id,
            });
            }
        await product.update(body);
        res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
    };
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
        if (!product) {
        return res.status(404).json({
            msg: "No existe un product con el id " + id,
        });
        }
    await product.destroy();
    res.json(product);
    };