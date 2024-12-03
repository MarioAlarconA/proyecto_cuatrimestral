import { Request, Response } from "express"
import { QuestionModel } from "../models/QuestionModel"

export const registerQuestionnaire = async (req:Request, res:Response): Promise<any> =>{
    try{
        const title = req.body.title
        const type = req.body.type
        const isMandatory = req.body.isMandatory
        const qstId = req.body.qstId

        if(!title || !type || !isMandatory || !qstId){
            return res.status(400).json({
                msg:"faltan datos we"
            })
        }

        const questionnaire = await QuestionModel.create({
            title: title,
            type: type,
            isMandatory: isMandatory,
            qstId: qstId
        })

        return res.status(200).json({
            msg:"cuestionario registrado con exito"
        })
    } catch (error){
        console.log(error)
        return res.status(500).json({
            msg:"error"
        })
    }
}

