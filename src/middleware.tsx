import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {

    const token = localStorage.getItem("token"); 

    const userIsAuthenticated = token === "AAaaBBBcc65ah.jhgAssbvnss.7shgdb" ? true : false; 
  
    if (!userIsAuthenticated && req.nextUrl.pathname !== "/login") {

      return NextResponse.redirect(new URL('/login', req.url))
      
    }
  
    return NextResponse.next()
    
  }

  export const config = {
    matcher: '/',
  };