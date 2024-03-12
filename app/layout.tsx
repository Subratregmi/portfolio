import type { Metadata } from "next"
import { Exo } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
const oswald = Exo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Subrat Regmi",
    template: "%s Subrat Regmi",
  },
  description:
    "Greetings, I'm Subrat Regmi, a skilled Automation Tester specialized in Cypress. With a strong focus on problem-solving, I tested dynamic, responsive and scalable web apps.",
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full antialiased", oswald.className)}>
        <main className="relative flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </main>
      </body>
    </html>
  )
}
