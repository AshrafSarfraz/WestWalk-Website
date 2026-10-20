import "./globals.css";
import SiteShell from "@/components/SiteShell";
export const metadata = {
  title: "West Walk",
  description: "Discover life at West Walk, Al Waab, Doha.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
