import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Keto Hero",
  description: "We make going keto easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html className="h-full " lang="en">
        <body className="h-full">
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
