import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          {/* <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Devops Enthusiast
          </h2> */}
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="pt-6">
                <blockquote className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-white">
                    I’m Vikash, a Full Stack Developer with experience building
                    modern web applications using MERN Stack and Spring Boot. I
                    enjoy creating scalable systems, designing efficient APIs,
                    and building smooth user experiences.
                  </p>
                </blockquote>
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 border-teal-500 pl-4">
                  <p className="text-white">
                    Over the past years, I’ve worked on SaaS products,
                    authentication systems, admin dashboards, real-time
                    applications, and workflow-based platforms. My work ranges
                    from frontend UI development to backend architecture,
                    database design, and deployment.
                  </p>
                </blockquote>
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I focus on writing clean, maintainable code while
                    continuously improving my understanding of system design,
                    DevOps, and scalable application architecture.
                  </p>
                  {/* 
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div>
                  </div> */}
                </blockquote>
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 border-teal-500 pl-4">
                  <p className="text-white">
                   I enjoy transforming product ideas into practical, production-ready applications that deliver real value to users and businesses.
                  </p>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
