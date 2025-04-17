import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('catatan',{
    title:{type:Sequelize.STRING,allowNull:true},
    tag: Sequelize.STRING,
    content: Sequelize.STRING},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})(); 
