// middleware.ts
import { NextResponse } from 'next/server'
import {getToken} from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (req: NextRequest) => {
    
    if (req.nextUrl.pathname === '/') {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === 'production'
        })
        if(!session) {
            const url = req.nextUrl.clone()
            url.pathname = '/home'
            return NextResponse.redirect(url)
            // return NextResponse.rewrite(url)
        };
    }

}


