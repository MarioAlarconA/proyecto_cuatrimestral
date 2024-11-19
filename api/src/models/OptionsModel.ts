import { Schema, model } from "mongoose";

interface IOption{
    title:string;
    questionId:Schema.Types.ObjectId | string;
}

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