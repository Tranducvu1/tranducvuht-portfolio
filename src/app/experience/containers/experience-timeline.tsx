import { BlurImage } from "@/components/ui/apple-cards-carousel"
import { Timeline } from "@/components/ui/timeline"
// import BlurImage from "next/image"

const data = [
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
        Began as an intern and swiftly adapted to the backend development workflow.<br />{" "}
        Engineered robust APIs and environmental monitoring platforms, driving performance and scalability.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage
            src="/images/ilotusland/ilotusland_1.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/ilotusland/ilotusland_2.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
         
        </div>
      </div>
    ),
  },
  
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Embarked on a new chapter with cutting-edge IoT projects with
          <strong> Digital Fortress</strong>.
          <br /> Step by step, I proved myself and earned the trust to become a
          key member of the team, contributing to feature development and
          product stability.
        </p>
        {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
        <div className="grid grid-cols-1 gap-4">
          <BlurImage
            src="/images/digitalfortress/section_1.png"
            alt="hero template"
            width={500}
            height={1000}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Internship Highlights 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          In 2023, I completed a 6-month internship at the Academic Affairs Office
          of my university. During this time, I gained valuable hands-on experience
          and contributed to several tasks that enhanced my understanding of backend development and administrative systems.
        </p>
  
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Assisted in maintaining internal systems used for academic scheduling and student records
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Supported backend tasks using Java and MySQL under the guidance of senior developers
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Participated in debugging and improving small internal tools for staff
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Learned about workflow in educational administration systems
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Improved communication and collaboration through weekly team meetings and code reviews
          </div>
        </div>  
      </div>
    ),
  },
]

export function ExperienceTimeline() {
  return (
    <div className="w-full h-full">
      <Timeline data={data} />
    </div>
  )
}
