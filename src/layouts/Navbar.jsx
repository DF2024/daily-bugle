import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import DailyLogo from "../assets/logos/DailyLogo.jpg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 bg-white transition-all duration-300
          ${isScrolled ? "py-2 shadow-md" : "py-6"}
        `}
      >
        {/* LOGO */}
        <div className="grid justify-items-center">
          <div
            className={`
              transition-all duration-300
              ${isScrolled ? "w-34" : "w-32 sm:w-48 md:w-156"}
            `}
          >
            <img src={DailyLogo} alt="dailybuglelogo" />
          </div>
        </div>

        {/* TEXTO CENTRAL */}
        <span
          className={`
            flex items-center transition-all duration-300
            ${isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}
          `}
        >
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-700"></span>

          <span className="font-garamond shrink-0 px-4 text-xl text-gray-900">
            The story of heros continues here
          </span>

          <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-700"></span>
        </span>

        {/* NAV */}
        <div className="grid justify-items-center mt-3 mb-3">
          <nav aria-label="Global">
            <ul
              className={`
                font-marriweather flex items-center transition-all duration-300
                ${isScrolled ? "gap-6 text-lg" : "gap-10 text-xl"}
              `}
            >
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">About</a></li>
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">Careers</a></li>
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">History</a></li>
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">Services</a></li>
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">Projects</a></li>
              <li><a className="text-gray-900 hover:text-gray-500/75" href="#">Blog</a></li>
            </ul>
          </nav>
        </div>

        {/* LÍNEA INFERIOR */}
        <span className="flex items-center mb-4">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-700"></span>
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-700"></span>
        </span>
      </header>

      <Outlet />
    </>
  )
}

export default Navbar
