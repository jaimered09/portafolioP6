import { NextResponse } from "next/server"


export const GET = async (request, {params}) => {

    const id = params.userID
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return NextResponse.json({
        message: 'Usuario encontrado con exito',
        status: 200,
        data
    })
}