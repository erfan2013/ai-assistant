import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";

const soraSans = Sora({
  variable: "--font-geist-sans", // همون متغیر قبلی، لازم نیست جای دیگه رو دست بزنی
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// فونت مونو برای جاهایی مثل کد/اعداد (اختیاری)
const jetMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "AI-powered assistance for your tasks",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
    <html lang="en">
      <body
        className={`${soraSans.variable} ${jetMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
    </TRPCReactProvider>
  );
}
