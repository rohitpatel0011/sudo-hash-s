import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeContextProvider } from "@/context/ThemeContext";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hash-Team",
  description: "Join Your Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          suppressHydrationWarning
          rel="stylesheet"
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
        ></link>
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>
      </head>
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
