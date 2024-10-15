

import type { Metadata } from "next";
import "./globals.css";
import './token.css'
import localFont from "next/font/local";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";


import { Theme, Container, Flex, Box } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




 
  return (
    <html lang="en" className="dark" suppressHydrationWarning >
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Theme accentColor="crimson" panelBackground="solid"
          
          >
              <Navbar />
            <Container>
              
      <main className="p-5">{children}</main>
                
              
            </Container>
              </Theme>
              </ThemeProvider>

        
      </body>
    </html>
  );
}
