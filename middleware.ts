import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/menu", "/blog", "/contact", "/pricing", "/about"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
