import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PhoneHut | Buy Mobile Phones Online in Bangladesh",
    template: "%s | PhoneHut",
  },
  description:
    "PhoneHut is a trusted online mobile phone store in Bangladesh. Buy original smartphones from top brands like Samsung, iPhone, and Xiaomi at the best price with Cash on Delivery.",

  keywords: [
    "PhoneHut",
    "buy mobile phone online Bangladesh",
    "smartphone shop BD",
    "Samsung phone price Bangladesh",
    "iPhone price BD",
    "Xiaomi phone Bangladesh",
    "online mobile store",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#1E1E1E] font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
