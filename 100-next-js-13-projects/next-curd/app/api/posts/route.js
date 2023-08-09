// url : http://localhost:3000/api/posts
// from light code youtube channel

import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export const Post = async (request) => {
    try{
        const body = await request.json();
        const { title, description } = body;
        const newPost = await prisma.post.create({
            data: {
                title,
                description
            }
        })

        return NextResponse.json(newPost);
    } catch(err){
        return NextResponse.json({message: 'POST Error', err}, {status: 500})

    }

}

