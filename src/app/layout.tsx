import "./global.css";
import { CSRFProvider } from "@/components/providers/CSRFProvider";
import { UserProvider } from "@/components/providers/UserProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <CSRFProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </CSRFProvider>
      </body>
    </html>
  );
}