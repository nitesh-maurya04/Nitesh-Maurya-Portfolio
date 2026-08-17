import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

function Hero() {

  const heroRef = useRef(null)
  const introRef = useRef(null)
  const nameRef = useRef(null)
  const descriptionRef = useRef(null)
  const timeRef = useRef(null)
  const resumeRef = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const description =
        "I can build what you need, as long as I'm learning, creating something meaningful, or getting paid fairly — ideally all three."

      // Initial states
      gsap.set(introRef.current, {
        x: -80,
        opacity: 0
      })

      gsap.set(nameRef.current, {
        y: 80,
        opacity: 0
      })

      gsap.set(descriptionRef.current, {
        opacity: 1
      })

      gsap.set(timeRef.current, {
        opacity: 0
      })

      gsap.set(resumeRef.current, {
        opacity: 0
      })


      // Timeline
      const tl = gsap.timeline({
        delay: 0.3
      })


      // Hi, I'm → Left to Right
      tl.to(introRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })


      // Nitesh Maurya → Bottom to Top
      .to(nameRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.35")


      // Description → Typing Effect
      .call(() => {
        descriptionRef.current.textContent = ""
      })
      .to({
        value: 0
      }, {
        value: description.length,
        duration: 2,
        ease: "none",
        onUpdate: function () {
          const currentLength = Math.round(this.targets()[0].value)

          descriptionRef.current.textContent =
            description.substring(0, currentLength)
        }
      })


      // Don't have much time? → Fade
      .to(timeRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })


      // Resume → Fade
      .to(resumeRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3")

    }, heroRef)

    return () => ctx.revert()

  }, [])


  return (
    <section
      ref={heroRef}
      id="home"
      className="relative scroll-mt-20 px-6 py-6 sm:px-10 lg:px-16"
    >

      <div className="mx-9 flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

        {/* ================= PART 1 ================= */}
        <div className="flex w-full mt-6 mb-6 flex-col items-start pt-6 lg:w-1/2 lg:pt-2">

          <h1 className="text-5xl leading-tight sm:text-6xl lg:text-7xl">

            {/* Hi, I'm */}
            <span
              ref={introRef}
              className="block font-dm text-2xl font-medium text-[#B8BCC8] sm:text-3xl"
            >
              Hi, I'm
            </span>

            {/* Nitesh Maurya */}
            <span
              ref={nameRef}
              className="block font-montserrat font-extrabold tracking-[-0.03em] text-[#38BDF8] [text-shadow:0_0_40px_rgba(9,165,250,0.50)]"
            >
              Nitesh Maurya
            </span>

          </h1>


          {/* Description */}
          <p
            ref={descriptionRef}
            className="mt-7 max-w-xl text-2xl leading-relaxed text-[#B8BCC8] sm:text-3xl"
          >
          </p>


          {/* Resume Area */}
          <div className="mt-9 flex flex-nowrap items-center gap-4">

            <h3
              ref={timeRef}
              className="whitespace-nowrap text-sm font-medium text-gray-400 sm:text-base"
            >
              Don't have much time?
            </h3>

            <a
              ref={resumeRef}
              href="#"
              className="shrink-0 rounded-full bg-[#551841] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(85,24,65,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#6B2353] hover:shadow-[0_0_30px_rgba(85,24,65,0.45)]"
            >
              View Resume
            </a>

          </div>

        </div>

              {/* ================= PART 2 ================= */}
        <div className="flex w-full lg:w-1/2 lg:pt-5">

          {/* ================= QUICK STATS ================= */}

          <div className="mx-auto mt-6 mb-6 w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B1020]/35 p-4 shadow-[0_0_40px_rgba(56,189,248,0.04)] backdrop-blur-md sm:p-5">

            {/* ================= MAIN HEADING ================= */}

            <div className="mb-5 text-center">

              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Quick Stats
              </h3>

              <div className="mx-auto mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

            </div>


            {/* ================= STAT BOXES ================= */}

            <div className="grid gap-3 sm:grid-cols-2">


              {/* ================= 01 CURRENT PROJECT ================= */}

              <div className="group overflow-hidden rounded-xl border border-[#38BDF8]/20 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.04]">

                {/* Header */}

                <div className="flex items-center justify-between bg-[#38BDF8]/10 px-4 py-2.5">

                  <span className="text-[11px] font-medium text-[#38BDF8]">
                    01
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-gray-500">
                    Current
                  </span>

                </div>


                {/* Content */}

                <div className="p-4">

                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                    Current Project
                  </p>

                  <h4 className="mt-1.5 text-lg font-semibold text-white">
                    Furniture Showcase
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    Currently building
                  </p>

                </div>

              </div>


              {/* ================= 02 PROJECTS ================= */}

              <div className="group overflow-hidden rounded-xl border border-[#A855F7]/20 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/50 hover:bg-[#A855F7]/[0.04]">

                {/* Header */}

                <div className="flex items-center justify-between bg-[#A855F7]/10 px-4 py-2.5">

                  <span className="text-[11px] font-medium text-[#A855F7]">
                    02
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-gray-500">
                    Projects
                  </span>

                </div>


                {/* Content */}

                <div className="p-4">

                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                    Number of Projects
                  </p>

                  <h4 className="mt-1.5 text-2xl font-bold text-white">
                    01
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    Built / In Progress
                  </p>

                </div>

              </div>


              {/* ================= 03 DSA PROGRESS ================= */}

              <div className="group overflow-hidden rounded-xl border border-[#38BDF8]/20 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.04]">

                {/* Header */}

                <div className="flex items-center justify-between bg-[#38BDF8]/10 px-4 py-2.5">

                  <span className="text-[11px] font-medium text-[#38BDF8]">
                    03
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-gray-500">
                    Progress
                  </span>

                </div>


                {/* Content */}

                <div className="p-4">

                  <div className="flex items-center justify-between">

                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                      DSA Progress
                    </p>

                    <a
                      href="https://leetcode.com/u/nitesh_maurya_04/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="rounded-md bg-white px-2.5 py-1 text-[10px] font-medium text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                        view LeetCode
                      </button>
                    </a>

                  </div>

                  <div className="mt-1.5 flex items-baseline gap-2">

                    <h4 className="text-2xl font-bold text-white">
                      0
                    </h4>

                    <span className="text-xs text-gray-500">
                      Solved
                    </span>

                  </div>


                  {/* Difficulty */}

                  <div className="mt-3 flex flex-wrap gap-2 text-[10px]">

                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-gray-400">
                      Easy{" "}
                      <span className="text-white">
                        0
                      </span>
                    </span>

                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-gray-400">
                      Medium{" "}
                      <span className="text-white">
                        0
                      </span>
                    </span>

                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-gray-400">
                      Hard{" "}
                      <span className="text-white">
                        0
                      </span>
                    </span>

                  </div>

                </div>

              </div>


              {/* ================= 04 TECH & TOOLS ================= */}

              <div className="group overflow-hidden rounded-xl border border-[#A855F7]/20 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/50 hover:bg-[#A855F7]/[0.04]">

                {/* Header */}

                <div className="flex items-center justify-between bg-[#A855F7]/10 px-4 py-2.5">

                  <span className="text-[11px] font-medium text-[#A855F7]">
                    04
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-gray-500">
                    Stack
                  </span>

                </div>


                {/* Content */}

                <div className="p-4">

                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                    Tech & Tools
                  </p>


                  {/* Tech Pills */}

                  <div className="mt-3 flex flex-wrap gap-1.5">

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      React
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      Tailwind
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      Python
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      Django
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      PostgreSQL
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      Git
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                      GSAP
                    </span>

                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero