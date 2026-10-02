export { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;
  const { pathname } = req.nextUrl;

  // 1. Regra de Segurança para o Admin
  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

  if (userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (!isLoggedIn && (pathname.startsWith("/dashboard") || pathname.startsWith("/perfil"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
})

export const config = {
  matcher: [
      "/admin/:path*",
      "/dashboard/:path*",
      "/perfil/:path*",
    ],};
