import { Schema, model } from "mongoose";

interface IForm{
    title:string;
    description:string;
    userId:Schema.Types.ObjectId | string;
}

const FormSchema = new Schema<IForm>({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:"forms"
    }

})


export const FormModel = model("forms", FormSchema)