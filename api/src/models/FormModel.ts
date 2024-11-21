import { Schema, model } from "mongoose";
import { IForm } from "../GlobalTypes";


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
        ref:"users"
    }

})


export const FormModel = model("forms", FormSchema)