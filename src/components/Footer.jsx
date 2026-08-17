function Footer() {
  return (
    <footer className="border-t border-green-400/20 bg-[#050505]">

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Nitesh Maurya. All rights reserved.
        </p>

        {/* Built With */}
        <p className="text-sm text-gray-500">
          Built with <span className="text-green-400">React</span> +{" "}
          <span className="text-green-400">Tailwind CSS</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;