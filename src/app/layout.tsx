import "./global.css";
import { CSRFProvider } from "@/components/providers/CSRFProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <CSRFProvider>
          {children}
        </CSRFProvider>
      </body>
    </html>
  );
}