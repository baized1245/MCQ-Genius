import {
  Inter,
  Poppins,
  Noto_Serif_Bengali,
  Montserrat,
  Figtree,
  // Website_Blog_Subheading,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const noto = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
// const blog = Website_Blog_Subheading({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

export const metadata = {
  title: "MCQ Genius",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${noto.className} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
