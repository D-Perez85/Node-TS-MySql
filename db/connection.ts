import { Sequelize } from "sequelize";

const db = new Sequelize('node','root', 'DaleNob1974',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

export default db; 