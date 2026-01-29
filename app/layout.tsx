import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Footer } from "./ui/Footer";
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Book Friends",
    description: "Find your next book on your friends' bookshelf!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
