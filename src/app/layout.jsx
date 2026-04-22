import Navbar from "@/components/features/nav/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/features/themes/theme-provider";
import Footer from "@/components/features/footer/footer";

export const metadata = {
  title: "Vitruvian Dev",
  description: "Sua empresa fav!",
};

export default function RootLayout({ children } ) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
