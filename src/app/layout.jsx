import { Poppins } from "next/font/google";
// import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

import { NuqsClientAdapter } from "@/components/nuqs-client-adapter";

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
        <NuqsClientAdapter>
          {children}
          <ChatSupport />
        </NuqsClientAdapter>
      </body>
    </html>
  );
}
