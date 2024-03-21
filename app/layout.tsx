import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Keto Hero",
  description: "We make going keto easy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Nav />
      {children}
      <Footer />
    </ClerkProvider>
  );
}
