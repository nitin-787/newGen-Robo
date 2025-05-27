import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New-gen Robo",
  description: "Created with love by Nitin",
  icons: {
    icon: "/assets/favicon/favicon.ico", 
    shortcut: "/assets/favicon/favicon.ico", 
    apple: "/assets/favicon/apple-touch-icon.png", 
    other: [
      { rel: "icon", url: "/assets/favicon/favicon-16x16.png" },
      { rel: "icon", url: "/assets/favicon/favicon-32x32.png" },
      { rel: "icon", url: "/assets/favicon/favicon-96x96.png" },
      { rel: "apple-touch-icon", url: "/assets/favicon/apple-touch-icon.png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
