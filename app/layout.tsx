import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Keto Hero",
  description: "We make going keto easy",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html className="h-full " lang="en">
      <body className="h-full">
        <Provider session={session}>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
