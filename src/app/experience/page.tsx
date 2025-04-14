import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Tranducvu",
  description:
    "Explore the professional journey of tranducvu - back end developer with experience in modern java frameworks.",
  openGraph: {
    title: "Experience | Tranducvu",
    description:
      "Back end Developer with hands-on experience in Java Spring boots, Nestjs, and Myssql,Postgressql.",
    url: "https://kinhdev.id.vn/experience",
    siteName: "Tranducvu",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Tranducvuht",
    description:
      "Check out Kinh Dev's past work and achievements in frontend development.",
    //   images: ["https://kinhdev.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
