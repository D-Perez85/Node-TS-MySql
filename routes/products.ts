import { Router } from "express";
import { Request, Response } from "express";

const router = Router(); 

router.get('/', (req: Request, res: Response)=>{
    console.log('PRODUCTS IS WORKING');
    res.status(201).json({
        msg: 'Get ok'
    })
    
}); 


export default router; 