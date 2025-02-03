import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

interface SiginReqBody{
    email:string;
    password:string;
}
export async function GET():Promise<NextResponse>{
    return NextResponse.json({data:"Connected"}, {status:200})
}
export async function POST(req:NextRequest):Promise<NextResponse>{
    const body:SiginReqBody = await req.json();
    const {data, error} = await supabase.auth.signInWithPassword(body)
    console.log(data, error)
    if(error){
        const {message, code} = error
        return NextResponse.json({message, code}, {status:error.status})
    }
    return NextResponse.json({data}, {status:200})
}