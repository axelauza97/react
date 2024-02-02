import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bazar Store - Axel Auza",
  description:
    "Example Ecommerce Web Page written with Next.js and Tailwind.css by Axel Auza A",
  keywords: "Axel Auza, Next.js, Tailwind, FrontEnd, FullStack",
};
import PropTypes from "prop-types";

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`bg-slate-50  ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
