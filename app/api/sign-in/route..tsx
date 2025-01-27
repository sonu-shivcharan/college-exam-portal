import { NextRequest, NextResponse } from "next/server";
interface singinBody{
    email:string;
    password:string;
}
export default function POST(req:NextRequest){
    const {body} = req;
    return NextResponse.json({body})
}