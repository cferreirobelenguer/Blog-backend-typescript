import express from 'express' //ESModules
import db from '../database/db.json'

const router=express.Router();
//hago el tipado del json mediante una interfaz
interface database{
        publicaciones:{
                nick:string,
                title:string,
                description:string,
                date:string
        }[];
}
router.get('/all',(_req,res)=>{
        let result:database=db;
        res.json(result);
        console.log(result)
});

export default router;