import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'lib/helpers/cookie';
// This function can be marked `async` if using `await` inside
export function middleware(request: any) {
   // console.log(request.cookies["access_token"]);
  if(request.nextUrl.pathname.startsWith('/auth')){
    return NextResponse.redirect(new URL("/", request.url))
  }

  switch (request.nextUrl.pathname) {
    case "/profile":
      // console.log(request.cookies["access_token"]);
      if(!request.cookies.get('access_token')){
        return NextResponse.redirect(new URL("/auth/login", request.url))
      }
      break;
    default:
      break;
  }
}
export const config = {
  matcher: ['/profile', '/auth'],
}
console.log('key')
