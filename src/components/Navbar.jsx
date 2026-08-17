import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const elements = navRef.current.querySelectorAll('h1, a, button')

    gsap.fromTo(
      elements,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.12,
        ease: 'power3.out',
      }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0B1020]/60 px-4 py-3 text-white backdrop-blur-lg pl-6 sm:pl-16 pr-6 sm:pr-16 sm:px-24 sm:py-5"
    >
      {/* Logo */}
      <h1 className="shrink-0 whitespace-nowrap text-[12px] font-semibold sm:text-[25px]">
        NITESH MAURYA
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-3 sm:gap-8">
        <a href="#home"
        className="cursor-pointer whitespace-nowrap text-[12px] text-white transition-colors hover:text-green-400 sm:text-[20px]">
          Home
        </a>

        <a href="#about"
        className="cursor-pointer whitespace-nowrap text-[12px] text-white transition-colors hover:text-green-400 sm:text-[20px]">
          About
        </a>

        <a href="#skills"
        className="cursor-pointer whitespace-nowrap text-[12px] text-white transition-colors hover:text-green-400 sm:text-[20px]">
          Skills
        </a>

        <a href="#projects"
        className="cursor-pointer whitespace-nowrap text-[12px] text-white transition-colors hover:text-green-400 sm:text-[20px]">
          Project
        </a>

        <a href="#contact">
          <button className="rounded-full bg-green-400 px-2.5 py-1 text-[9px] font-semibold text-black hover:bg-green-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] sm:px-6 sm:py-2.5 sm:text-[20px]">
            Contact
          </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar