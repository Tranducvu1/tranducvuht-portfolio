import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Tran Duc Vu | Back-end Developer Portfolio",
  description:
    "Khám phá portfolio của Trần Đức Vũ – một Back-end Developer chuyên nghiệp với kinh nghiệm trong Java Spring Boot, NestJS, MySQL và PostgreSQL. Xây dựng hệ thống mạnh mẽ, hiệu suất cao và dễ mở rộng.",
  keywords: [
    "Back-end Developer",
    "Java Developer",
    "Spring Boot",
    "NestJS",
    "MySQL",
    "PostgreSQL",
    "API Development",
    "System Design",
    "Server-side Developer",
    "Tran Duc Vu Portfolio",
  ],
  openGraph: {
    title: "Tran Duc Vu | Back-end Developer Portfolio",
    description:
      "Portfolio của Trần Đức Vũ – chuyên gia Back-end với kinh nghiệm trong Spring Boot, NestJS, MySQL và PostgreSQL. Khám phá các dự án thực tế và khả năng phát triển hệ thống.",
    url: "https://your-portfolio-domain.com", 
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/3RN8KaS.jpeg", 
        width: 1200,
        height: 630,
        alt: "Tran Duc Vu - Back-end Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Duc Vu | Back-end Developer Portfolio",
    description:
      "Khám phá dự án và kỹ năng Back-end của Trần Đức Vũ với Java, NestJS và hệ quản trị cơ sở dữ liệu.",
    images: [
      "https://your-image-hosting.com/your-open-graph-image.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
