import Navbar from "@/components/features/nav/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/features/themes/theme-provider";
import Footer from "@/components/features/footer/footer";
import ClickSpark from "@/components/ClickSpark";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Vitruvian Dev",
  description: "Sua empresa fav!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={montserrat.variable}>
      <head>
        <link rel="icon" href="/logo/padrao-light.png" sizes="any" />
      </head>

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClickSpark
            sparkColor="#ffffff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Navbar />
            {children}
            <Footer />
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}