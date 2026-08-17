function Design() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* ================= BASE GLOW ================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.07),transparent_38%)]
        "
      />


      {/* ================= CYAN AURORA ================= */}

      <div
        className="
          absolute
          -left-[15%]
          top-[5%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#38BDF8]/10
          blur-[130px]
        "
      />


      {/* ================= PURPLE AURORA ================= */}

      <div
        className="
          absolute
          -right-[15%]
          top-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#A855F7]/10
          blur-[140px]
        "
      />


      {/* ================= CENTER SPOTLIGHT ================= */}

      <div
        className="
          absolute
          left-1/2
          top-[38%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(56,189,248,0.07),transparent_65%)]
          blur-[20px]
        "
      />


      {/* ================= BOTTOM AURORA ================= */}

      <div
        className="
          absolute
          -bottom-[20%]
          left-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#7C3AED]/7
          blur-[150px]
        "
      />


      {/* ================= STAR FIELD ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
        <span className="star star-9" />
        <span className="star star-10" />
        <span className="star star-11" />
        <span className="star star-12" />

      </div>


      {/* ================= TECHNICAL GRID ================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.028]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />


      {/* ================= DIAGONAL LIGHT ================= */}

      <div
        className="
          absolute
          -left-[20%]
          top-[45%]
          h-px
          w-[140%]
          rotate-[-12deg]
          bg-gradient-to-r
          from-transparent
          via-[#38BDF8]/10
          to-transparent
          blur-[1px]
        "
      />

      <div
        className="
          absolute
          -left-[20%]
          top-[65%]
          h-px
          w-[140%]
          rotate-[8deg]
          bg-gradient-to-r
          from-transparent
          via-[#A855F7]/8
          to-transparent
          blur-[1px]
        "
      />


      {/* ================= VIGNETTE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,9,20,0.45)_100%)]
        "
      />

    </div>
  )
}

export default Design