import { Header } from "@/components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { Sidebar } from "@/components/Sidebar";
import { AuthProvider } from "@/util/authProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <div className="flex flex-row justify-start">
            <Sidebar />
            <main className="grow overflow-y-auto p-4">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
