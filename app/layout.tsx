import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <html className="h-full bg-gray-50" lang="en">
      <body className="h-full">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
