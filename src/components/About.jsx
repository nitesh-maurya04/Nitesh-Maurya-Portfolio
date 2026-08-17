import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function About() {

  const aboutTitleRef = useRef(null)
  const aboutDescriptionRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(aboutTitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(aboutDescriptionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
        trigger: aboutDescriptionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
        }
      })

      gsap.from(card1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card1Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })


      gsap.from(card2Ref.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card2Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(card3Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card3Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(card4Ref.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card4Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    },)

    return () => ctx.revert()

  }, [])

  return (
    <section
      id="about"
      className="relative scroll-mt-20 px-6 py-12 sm:px-10 lg:px-16"
    >
      <div className="translate-y-10 pb-10">

        {/* ================= HEADING ================= */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
            About Me
          </p>

          <h2 
          ref={aboutTitleRef}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A little about who I am
          </h2>

        </div>

        {/* ================= CONTENT ================= */}
          <div className="mb-12 w-full">
            <p 
            ref={aboutDescriptionRef}
            className="mx-10 text-lg leading-8 text-gray-400 sm:text-xl">
            Hey, I'm{" "}
            <span className="font-semibold text-white">
              Nitesh Maurya
            </span>{" "}
            — a BSc Computer Science student and learning things to become
            full-stack developer who enjoys turning ideas into real, usable
            things.
                  </p>
          </div>


        {/* ================= CONTENT ================= */}
        <div className="mx-auto max-w-5xl">
          {/* ================= Q&A CARDS ================= */}
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Card 1 */}
            <div
            ref={card1Ref}
             className="group rounded-2xl border border-[#38BDF8]/40 bg-[#0B1020]/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">

              <h3 className="mb-3 text-lg font-semibold text-white">
                What I Do
              </h3>

              <p className="text-base leading-7 text-gray-400">
                I work on web development, while continuously improving my
                problem-solving and development skills.
              </p>

            </div>


            {/* Card 2 */}
            <div
            ref={card2Ref} 
            className="group rounded-2xl border border-[#551841]/70 bg-[#0B1020]/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#A8557A]/80 hover:shadow-[0_0_30px_rgba(168,85,122,0.18)]">

              <h3 className="mb-3 text-lg font-semibold text-white">
                What I'm Learning
              </h3>

              <p className="text-base leading-7 text-gray-400">
                I'm exploring the complete journey of building applications —
                from clean interfaces to APIs, databases and eventually
                deploying complete projects.
              </p>

            </div>


            {/* Card 3 */}
            <div 
            ref={card3Ref}
            className="group rounded-2xl border border-[#38BDF8]/40 bg-[#0B1020]/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">

              <h3 className="mb-3 text-lg font-semibold text-white">
                Why I Code
              </h3>

              <p className="text-base leading-7 text-gray-400">
                I enjoy taking an idea, breaking it into smaller problems,
                and figuring out how to build it. For me, coding is about
                understanding how things actually work.
              </p>

            </div>


            {/* Card 4 */}
            <div 
            ref={card4Ref}
            className="group rounded-2xl border border-[#551841]/70 bg-[#0B1020]/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#A8557A]/80 hover:shadow-[0_0_30px_rgba(168,85,122,0.18)]">

              <h3 className="mb-3 text-lg font-semibold text-white">
                Outside Coding
              </h3>

              <p className="text-base leading-7 text-gray-400">
                When I'm not coding, you'll probably find me working out,
                creating content, experimenting with new ideas, or simply
                taking some time away from the screen.
              </p>

            </div>

          </div>

        </div>

      </div>

       {/* ================= PHILOSOPHY ================= */}
          <div className="w-full mx-10">
            <div className="mt-10 w-full border-l-2 border-[#38BDF8]/60 pl-5">

              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                My Approach
              </p>

              <p className="mt-2 text-xl font-semibold tracking-wide text-white">
                Learn → Build → Break → Fix → Improve.
              </p>

            </div>

                      {/* ================= GOAL ================= */}
          <div className="mt-10">

            <h3 className="mb-2 text-lg font-semibold text-white">
              What's Next
            </h3>

            <p className="text-base leading-7 text-gray-400">
              My goal is to become a strong full-stack developer, build
              meaningful projects, and keep expanding my skills across
              web development, backend systems and emerging technologies.
            </p>

          </div>

          </div>
    </section>
  )
}

export default About