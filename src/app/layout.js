import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-screen w-screen bg-red-500 ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
