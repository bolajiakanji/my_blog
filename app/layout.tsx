import type { Metadata } from "next";
import "./token.css";
import "./globals.css";

import localFont from "next/font/local";
//import { Roboto } from 'next/font/google'
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";

import { Theme, Container } from "@radix-ui/themes";

import MenuToggleProvider from "./components/MenuToggleProvider";

import AppWrapper from "./components/AppWrapper";
import Overlay from "./components/Overlay";
import ProjectWrapperProvider from "./components/ProjectOverlayProvider";
import ClientboundingProvider from "./components/ClientBoundingProvider";

// const roboto = Roboto({
//   subsets: ['latin'],
//   variable: '--font-roboto',
//   weight: ['400', '500']
// })

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Theme accentColor="crimson" panelBackground="solid" radius="full">
            <MenuToggleProvider>
              <div className="relative left-0 top-0 w-full h-full">
                
                <div className=" dark:bg-bg_color w-full  fixed h-screen">
                <div
                  style={{
                    width: "100%",
                    borderEndStartRadius: "50%",
                    borderEndEndRadius: "50%",
                    height: "20vh",
                    zIndex: "1",
                  }}
                  className="dark:bg-black fixed"
                ></div>
                <div
                  className="dark:bg-black fixed"
                  style={{
                    position: "fixed",
                    height: "25vh",
                    zIndex: "2",
                    width: "100%",
                    bottom: "0",
                    left: "0",
                  }}
                ></div>

                <div
                  style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    height: "100vh",
                    zIndex: "3",
                    width: "100%",
                  }}
                ></div>

                <div
                  className="dark:bg-bg_color fixed"
                  style={{
                    marginBottom: "0px",
                    marginTop: "45vh",
                    width: "50%",
                    zIndex: "4",
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                    height: "40vh",
                  }}
                ></div>
                <div
                  className="dark:bg-black "
                  style={{
                    width: "55%",
                    position: "fixed",
                    bottom: "0",
                    right: "0",
                    float: "right",
                    height: "35vh",
                    borderTopLeftRadius: "50%",
                    borderTopRightRadius: "50%",
                    zIndex: "5",
                  }}
                ></div>

                
                  <div
                    style={{
                      position: "fixed",
                      left: "0",
                      top: "0",
                      zIndex: "7",
                      fontSize: "1.rem",
                      backgroundColor: "#01031",
                    }}
                    className="w-full "
                ></div>
                </div>
                </div>
                

                <div className="absolute top-0 left-0 w-full">
                <AppWrapper>
                  
                  <ClientboundingProvider>
                  <Navbar />
                    <ProjectWrapperProvider>

                      
                       <main>{children}</main>
                      
                    </ProjectWrapperProvider>

                    <Overlay />
                    </ClientboundingProvider>
                  </AppWrapper>
                </div>
              
            </MenuToggleProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
{
  /* px-6 md:px-8 */
}
