import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New-gen Robo",
  description: "Created with love by Nitin",
  icons: {
    icon: "/public/assets/images/new-gen-robo-logo.jpeg",
    shortcut: "/favicon.ico",
    apple: "/public/assets/images/new-gen-robo-logo.jpeg",
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
