import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";

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


import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// for fontawesome ends here
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import {
    Theme,
    toast as rtoast,
    ToastContainer,
    TypeOptions
} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RootLayout=({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>)=> {
    return (
        <html lang="en">
        <StoreProvider>

            <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <ToastContainer
                autoClose={1000}
                position='top-right'
                theme='light'
                // autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {children}
            </body>

        </StoreProvider>
        </html>
    );
}

export default RootLayout;


export const dynamic = 'force-dynamic'
