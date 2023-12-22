import type { Metadata } from "next";
import localFont from "@next/font/local";
import ChakraProvider from "../components/providers/ChakraProvider";
import "./globals.css";
import "react-day-picker/dist/style.css";

const euclid = localFont({
  src: [
    {
      path: "../../public/fonts/Euclid-Circular-B-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "Myxellia",
  description: "Myxellia Admin Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={euclid.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
