import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UserAuth from "@/components/UserAuth";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="px-4">
          <div className="text-center">
            <h2 className="font-bold text-base">
              Start your 3 month free trial
            </h2>
          </div>
          <div className="flex">
            <Nav children={<UserAuth />} />
          </div>
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
