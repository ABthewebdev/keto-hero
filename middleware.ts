import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/profile", "/register", "/dashboard"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/das"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
