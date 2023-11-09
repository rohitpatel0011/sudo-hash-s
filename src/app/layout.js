import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
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
                    href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
                ></link>

            </head>
            <body className={inter.className}>
                <AuthProvider>
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
                </AuthProvider>
                <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
            </body>
        </html>
    );
}