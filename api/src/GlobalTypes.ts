import { Schema } from "mongoose";

export interface IAnswer{
    qstId:Schema.Types.ObjectId | string;
    questionId:Schema.Types.ObjectId | string;
    answer:string;
}

export interface IForm{
    title:string;
    description:string;
    userId:Schema.Types.ObjectId | string;
}

export interface IOption{
    title:string;
    questionId:Schema.Types.ObjectId | string;
}

export interface IQuestion{
    title:string;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    qstId:Schema.Types.ObjectId |string;
}

export interface IUser {
    name:string;
    email:string;
    lastName:string;
    password:string;
    rol:"administrator" | "client";
}