import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChakraProvider from "../components/providers/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myxellia",
  description: "Myxellia Admin Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
