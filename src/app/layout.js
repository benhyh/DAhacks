import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import StarsBackground from "./components/StarsBackground";

export const metadata = {
  title: "Cosmos Explorer",
  description: "DA Hacks 3.0 @ 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NextUIProvider>
          <StarsBackground />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
