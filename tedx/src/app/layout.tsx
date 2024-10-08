/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import "./globals.css";
import TEDxStarsCanvas from "./ui/stars";
import Script from "next/script";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar">
            <Script
                defer
                src={process.env.NEXT_PUBLIC_WEBSITE_SRC}
                data-website-id={process.env.NEXT_PUBLIC_WEBSITE_ID}
            ></Script>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <>
                    <TEDxStarsCanvas />
                    {children}
                </>
            </body>
        </html>
    );
}
