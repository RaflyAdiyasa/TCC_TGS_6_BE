import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Note = db.define('catatan',{
    title:{type:Sequelize.STRING,allowNull:true},
    tag: Sequelize.STRING,
    content: Sequelize.STRING},{
    freezeTableName:true
});

export default Note;

(async()=>{
    await db.sync();
})(); 
