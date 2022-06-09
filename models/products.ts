import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product = db.define('Product',{
    nombre: {
        type: DataTypes.STRING
    }, 
    price: {
        type: DataTypes.BIGINT
    }
}); 
export default Product; 

