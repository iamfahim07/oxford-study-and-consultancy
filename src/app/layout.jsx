import { Poppins } from "next/font/google";
import "./globals.css";

import ChatSupport from "@/components/chat-support";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Oxford Study & Consultancy",
  description: "A consultancy firm where you can receive career guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <ChatSupport />
      </body>
    </html>
  );
}
