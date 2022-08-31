import { Request, Response} from "express";
import joi from 'joi'
import { reqApi } from "./service";
export async function comparStar(req:Request, res:Response){
    const datas = req.body
      const schemaUser = joi.object({
        firstUser: joi.string().required(),
        secondUser: joi.string().required() 
    })
    const { error } = schemaUser.validate(datas)
    if (error) {
        res.sendStatus(422)
        return
    }
    try{
      const result = reqApi(datas.firstUser, datas.secondUser)
        
    }
   

}
