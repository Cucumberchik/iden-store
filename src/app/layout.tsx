import type { Metadata, NextPage } from "next";
import { ReactNode } from "react";
import "@/styles/global.scss"

export const metadata: Metadata = {
  title: "Айден Store",
  description: "Generated by create next app (Cucumberchik)",
};

const RootLayout:NextPage<Readonly<{children: React.ReactNode}>>
 = ({
  children,
}):ReactNode => {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body >{children}</body>
    </html>
  );
}

export default RootLayout