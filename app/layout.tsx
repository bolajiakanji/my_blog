

import type { Metadata } from "next";
import "./globals.css";
import './token.css'
import localFont from "next/font/local";
import { Roboto } from 'next/font/google'
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";


import { Theme, Container, Flex, Box } from "@radix-ui/themes";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500']
})

const poppins = localFont({
  src: "./fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
  
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
        className={poppins.variable}
      >
        <ThemeProvider
          attribute="class"
          
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Theme accentColor="crimson" panelBackground="solid"
          
          >
            <div className="relative left-0 top-0">
            <div style={{ width: '100%', height: '100vh' }}>
              <div style={{
                width: '100%', borderEndStartRadius:
                  '50%', borderEndEndRadius: '50%',
                height: '20vh', zIndex:'9', 
              }} className="dark:bg-black fixed">

              </div>
              <div className="dark:bg-black" style={{ position: 'fixed', height: '25vh', zIndex: '5',width:'100%',bottom:'0',left: '0'}}></div>

              <div style={{
                position: 'fixed', top: '0', left: '0', height: '100vh',zIndex: '6',width: '100%'
    
               }} >
                <div className="dark:bg-bg_color fixed" style={{ marginBottom: '0px', marginTop:'45vh', width: '50%', zIndex:"4", borderBottomLeftRadius:'50%', borderBottomRightRadius: '50%', height:'40vh'}}></div>
                <div className="dark:bg-black " style={{width:'55%',position:"fixed" , bottom: '0',right:'0',  float:'right', height:'35vh', borderTopLeftRadius:'50%', borderTopRightRadius:'50%'}} ></div>
              </div>
              <div>
                <div style={{ position: 'absolute', left: '0', top: '0',zIndex:'12',fontSize: '1.rem', backgroundColor: '#010314',  }} className="w-full ">
                  <div className="relative">
                    <Navbar />
            <Container style={{width: '100%'}} 
      >
              
                    <main  >{children}</main>
                
              
                    </Container>
                    </div>

                  </div>
                </div>
              </div>
              </div>
              </Theme>
              </ThemeProvider>

        
      </body>
    </html>
  );
}
{/* px-6 md:px-8 */}
