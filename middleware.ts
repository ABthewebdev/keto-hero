import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/menu",
    "/blog",
    "/contact",
    "/pricing",
    "/about",
    "/discounts",
    "/recipes",
    "/api/webhooks(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
