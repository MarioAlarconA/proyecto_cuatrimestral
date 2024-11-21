import { Schema, model } from "mongoose";
import { IOption } from "../GlobalTypes";


const OptionSchema = new Schema<IOption>({
    title:{
        type:String,
        required: true
    },
    questionId:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:"questions"
    }
})

export const OptionsModel = model("options", OptionSchema)