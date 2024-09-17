import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { AppContextProvider } from "@/context/context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    images: "/opengraph-image.png",
  },
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
      <AppContextProvider>
        <body className={`${inter.className} min-h-screen w-full`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
