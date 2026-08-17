import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


function Project() {

  const projectRef = useRef(null)

  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      // ==============================
      // Card 1 → Left side se
      // ==============================

      gsap.from(card1Ref.current, {
        left: -150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })


      // ==============================
      // Card 2 → Only Fade
      // ==============================

      gsap.from(card2Ref.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })


      // ==============================
      // Card 3 → Right side se
      // ==============================

      gsap.from(card3Ref.current, {
        left: 150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })

    }, projectRef)


    return () => ctx.revert()

  }, [])


  return (
    <section
      ref={projectRef}
      id="projects"
      className="relative scroll-mt-24 px-6 py-16 sm:px-10 lg:px-16"
    >

      {/* ================= HEADING ================= */}

      <div className="mb-12 text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Things I've built
        </h2>

      </div>


      {/* ================= PROJECT CARDS ================= */}

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


        {/* ================= CARD 1 ================= */}

        <div
          ref={card1Ref}
          className="
            group relative mx-auto aspect-[3/4] w-[90%] max-w-[320px]
            rounded-[1.5rem] bg-[#182A3A] p-6
            transition-all duration-500 ease-out
            hover:-translate-y-3 hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(56,189,248,0.80)]
          "
        >

          <div className="flex h-full -translate-y-6 flex-col items-center justify-center text-center">

            <div>

              <span className="text-xs font-medium uppercase tracking-wider text-[#38BDF8]">
                Planned
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                School Work Management
              </h2>

              <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-gray-400">
                Manage assignments, submissions and academic tasks.
              </p>

            </div>


            {/* View Project */}

            <a
              href="#"
              className="mt-6 rounded-full bg-black/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              View Project
            </a>


            <p className="mt-8 text-xs text-gray-500">
              React • Tailwind • Django REST • PostgreSQL
            </p>

          </div>

        </div>


        {/* ================= CARD 2 ================= */}

        <div
          ref={card2Ref}
          className="
            group mx-auto aspect-[3/4] w-[90%] max-w-[320px]
            rounded-[1.5rem] bg-white p-6
            transition-all duration-500 ease-out
            hover:-translate-y-3 hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(168,85,247,0.90)]
          "
        >

          <div className="flex h-full -translate-y-6 flex-col items-center justify-center text-center">

            <div>

              <span className="text-xs font-medium uppercase tracking-wider text-green-600">
                Planned
              </span>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Furniture Showcase
              </h2>

              <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-gray-600">
                Explore furniture, categories and interior designs.
              </p>

            </div>


            {/* View Project */}

            <a
              href="#"
              className="mt-6 rounded-full bg-black/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              View Project
            </a>


            <p className="mt-8 text-xs text-gray-500">
              React • Tailwind • Django REST • PostgreSQL
            </p>

          </div>

        </div>


        {/* ================= CARD 3 ================= */}

        <div
          ref={card3Ref}
          className="
            group relative mx-auto aspect-[3/4] w-[90%] max-w-[320px]
            rounded-[1.5rem]
            bg-[linear-gradient(180deg,hsl(var(--hue),75%,85%)_0%,hsl(var(--hue),75%,60%)_100%)]
            p-6
            transition-all duration-500 ease-out
            hover:-translate-y-3 hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(34,197,94,0.90)]          "
        >

          <div className="flex h-full -translate-y-6 flex-col items-center justify-center text-center">

            <div>

              <span className="text-xs font-medium uppercase tracking-wider text-gray-700">
                Planned
              </span>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Task Manager
              </h2>

              <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-gray-700">
                Create, organize and track your daily tasks.
              </p>

            </div>


            {/* View Project */}

            <a
              href="#"
              className="mt-6 rounded-full bg-black/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              View Project
            </a>


            <p className="mt-8 text-xs text-gray-700/70">
              React • Tailwind • Django REST • PostgreSQL
            </p>

          </div>

        </div>


      </div>

    </section>
  )
}

export default Project