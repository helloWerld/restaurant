import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Restaurant Finder",
    default: "Restaurant Finder | Find somewhere to eat without the hassle",
  },
  description:
    "Find somewhere to eat without the hassle - save searches, review restaurants, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
