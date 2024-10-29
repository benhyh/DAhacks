import StarsBackground from "./components/StarsBackground";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Mars Explorer",
  description: "DA Hacks 3.0 @ 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StarsBackground />
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
