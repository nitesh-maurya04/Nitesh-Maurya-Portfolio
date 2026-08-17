import { useState } from "react"

function Skills() {

  const [showAll, setShowAll] = useState(false)

  const skills = [
    {
      name: "CSS",
      color: "#1572B6",
      bg: "rgba(21, 114, 182, 0.10)",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      bg: "rgba(247, 223, 30, 0.08)",
    },
    {
      name: "React",
      color: "#61DAFB",
      bg: "rgba(97, 218, 251, 0.08)",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      bg: "rgba(6, 182, 212, 0.08)",
    },
    {
      name: "Python",
      color: "#3776AB",
      bg: "rgba(55, 118, 171, 0.10)",
    },
    {
      name: "Django",
      color: "#44B78B",
      bg: "rgba(68, 183, 139, 0.08)",
    },
    {
      name: "PostgreSQL",
      color: "#4169E1",
      bg: "rgba(65, 105, 225, 0.10)",
    },
  ]

  const visibleSkills = showAll
    ? skills
    : skills.slice(0, 6)

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 w-full px-6 py-12 sm:px-10 lg:px-16"
    >

      {/* ================= HEADING ================= */}

      <div className="mb-14 text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
          My Skills
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Tools I use to build
        </h2>

      </div>


      {/* ================= MAIN SKILLS BOX ================= */}

      <div className="mx-auto w-full">

        <div
          className="
            mx-0 rounded-3xl
            border-y border-[#38BDF8]/30
            bg-[#0B1020]/50
            px-3 py-6
            backdrop-blur-xl
            shadow-[0_0_50px_rgba(56,189,248,0.06)]
            sm:mx-10 sm:px-8 sm:py-10
          "
        >

          {/* Cards */}

          <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-6 lg:grid-cols-6">

            {visibleSkills.map((skill) => (

              <div
                key={skill.name}
                className="
                  group flex h-[160px] w-full max-w-[145px]
                  flex-col items-center justify-center
                  rounded-2xl border px-2
                  transition-all duration-300
                  hover:-translate-y-2
                  sm:h-[200px] sm:w-[170px] sm:max-w-none sm:px-5
                "
                style={{
                  backgroundColor: skill.bg,
                  borderColor: `${skill.color}40`,
                }}
              >

                {/* Logo */}

                <div
                  className="
                    mb-4 flex h-12 w-12
                    items-center justify-center
                    rounded-2xl text-lg font-bold
                    transition-transform duration-300
                    group-hover:scale-110
                    sm:mb-6 sm:h-16 sm:w-16 sm:text-xl
                  "
                  style={{
                    backgroundColor: `${skill.color}18`,
                    color: skill.color,
                  }}
                >
                  {skill.name.charAt(0)}
                </div>


                {/* Name */}

                <h3
                  className="text-center text-sm font-semibold sm:text-lg"
                  style={{
                    color: skill.color,
                  }}
                >
                  {skill.name}
                </h3>

              </div>

            ))}

          </div>

        </div>


        {/* ================= SHOW ALL / SHOW LESS ================= */}

        <div className="mt-8 flex justify-center">

          <button
            onClick={() => setShowAll(!showAll)}
            className="
              rounded-full
              border border-[#38BDF8]/40
              bg-[#38BDF8]/10
              px-7 py-3
              text-sm font-semibold
              text-[#38BDF8]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#38BDF8]
              hover:bg-[#38BDF8]/15
              hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]
            "
          >
            {showAll ? "Show Less" : "Show All"}
          </button>

        </div>

      </div>

    </section>
  )
}

export default Skills