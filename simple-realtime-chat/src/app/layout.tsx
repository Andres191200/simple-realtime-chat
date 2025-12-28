import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.scss";
import { Providers } from "./shared/components/providers";
import { Toaster } from "react-hot-toast";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple realtime chat",
  description: "A self-destructive realtime chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
