"use client"
import { GetCSRF } from "@/services/api/auth/authService";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
  const fetchCSRF = async () => {
    try {
      console.log("getting csrf")
      await GetCSRF()
    } catch (error) {
      console.error("CSRF fetch error:", error);
    }
  };
  fetchCSRF();
}, []);
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
