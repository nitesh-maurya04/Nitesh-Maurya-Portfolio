function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16"
    >

      {/* ================= HEADING ================= */}

      <div className="mb-14 text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let's build something together
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Have an idea, a project, or just want to talk about development?
          Feel free to reach out.
        </p>

      </div>


      {/* ================= CONTACT BOX ================= */}

      <div className="mx-auto w-full max-w-5xl">

        <div className="grid gap-8 rounded-3xl border border-[#38BDF8]/20 bg-[#0B1020]/50 p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.06)] sm:p-8 lg:grid-cols-2 lg:p-10">


          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col justify-center">

            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
              Have a project in mind?
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let's turn your idea into something real.
            </h3>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-400">
              Whether you're working on a project, looking for a developer,
              or simply want to connect, I'm always open to meaningful
              conversations.
            </p>


            {/* Email CTA */}

            <a
              href="mailto:niteshwork0503@email.com"
              className="mt-8 w-fit rounded-xl bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-[#0B1020] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7DD3FC] hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            >
              Get In Touch
            </a>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="grid gap-4 sm:grid-cols-2">


            {/* Email */}

            <a
              href="mailto:niteshwork0503@email.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]"
            >

              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="mt-3 break-all text-sm font-medium text-white transition-colors group-hover:text-[#38BDF8]">
                niteshwork0503@email.com
              </p>

            </a>


            {/* Location */}

            <div
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]"
            >

              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="mt-3 text-sm font-medium text-white">
                India
              </p>

            </div>


            {/* GitHub */}

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]"
            >

              <p className="text-sm text-gray-500">
                GitHub
              </p>

              <p className="mt-3 text-sm font-medium text-white transition-colors group-hover:text-[#38BDF8]">
                View GitHub →
              </p>

            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/nitesh-maurya-b1360b375/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]"
            >

              <p className="text-sm text-gray-500">
                LinkedIn
              </p>

              <p className="mt-3 text-sm font-medium text-white transition-colors group-hover:text-[#38BDF8]">
                Connect with me →
              </p>

            </a>


          </div>

        </div>

      </div>


      {/* ================= FOOTER TEXT ================= */}

      <p className="mt-12 text-center text-sm text-gray-600">
        I'm always open to learning, building and connecting.
      </p>

    </section>
  )
}

export default Contact