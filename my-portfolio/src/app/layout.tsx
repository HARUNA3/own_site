import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import * as FooterModule from "./components/footer";
const Footer = (FooterModule as any).default ?? FooterModule;

export const metadata: Metadata = {
  title: "Haruna | Engineering Portfolio",
  description: "Portfolio and daily learning outputs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
