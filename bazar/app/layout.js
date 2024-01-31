import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bazar Store - Axel Auza",
  description: "Created by Axel Auza",
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
