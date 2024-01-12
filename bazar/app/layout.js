import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazar Store",
  description: "Generated by Axel Auza",
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
        className={`bg-slate-200  ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
