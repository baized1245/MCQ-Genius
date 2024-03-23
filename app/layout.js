import {
  Inter,
  Poppins,
  Noto_Serif_Bengali,
  Montserrat,
  Figtree,
  // Website_Blog_Subheading,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const noto = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "MCQ Genius",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${noto.variable} ${montserrat.variable}`}
      >
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
