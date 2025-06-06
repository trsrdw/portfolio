import { ThemeProvider } from "@/lib/context/theme";
import "@/styles/globals.scss";

export const metadata = {
  title: "Tiara Sari Dewi",
  description: "Tiara's Portfolio Website",
  icons: {
    icon: "/logo-bw.png", // Default icon
    apple: "/logo-bw.png", // iOS Home Screen icon
  },
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="blueprint-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
