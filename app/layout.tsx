import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UserAuth from "@/components/UserAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="text-center">
            <h2 className="font-bold text-base">
              Start your 3 month free trial
            </h2>
          </div>
          <div className="flex">
            <Nav children={<UserAuth />} />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
