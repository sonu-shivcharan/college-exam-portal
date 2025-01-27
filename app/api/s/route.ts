import { NextRequest, NextResponse } from "next/server";


export async function GET():Promise<NextResponse>{
    return NextResponse.json({data:"Connected"}, {status:200})
}
export async function POST(req:NextRequest):Promise<NextResponse>{
    const {body } = await req.json()
    console.log(body)
    return NextResponse.json({data:"Connected"}, {status:200})
}