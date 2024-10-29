import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export default function middleware(req) {
  // Check if the request path is '/addtocart' and if __session cookie is missing
  const sessionCookie = req.cookies.get('__session');

  if (!sessionCookie && req.nextUrl.pathname === '/addtocart') {
    // Redirect to home page if cookie is missing and accessing /addtocart
    return NextResponse.redirect(new URL('/', req.url));
  }

  // If the cookie is present or the route is not /addtocart, use Clerk's middleware
  return clerkMiddleware()(req, NextResponse);
}

export const config = {
  matcher: [
    '/addtocart', // Protect the add-to-cart page
    '/((?!_next|sign-in|sign-up|api|trpc|addtocart).*)', // Exclude Next.js internals and sign-in/sign-up routes
  ],
};
