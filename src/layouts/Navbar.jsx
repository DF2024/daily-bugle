import DailyLogo from '../assets/logos/DailyLogo.jpg'
import { Outlet } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="grid justify-items-center m-7">
                <div className='w-32 sm:w-48 md:w-196 lg:w-196 '>
                    <img src={DailyLogo} alt="dailybuglelogo" />
                </div>
            </div>

            <span className="flex items-center">
                <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-700"></span>

                <span className="font-garamond shrink-0 px-4 text-xl text-gray-900">The story of heros continues here</span>

                <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-700"></span>
            </span>

                <div className="grid justify-items-center  mt-3 mb-3">
                    <nav aria-label="Global">
                        <ul className="font-marriweather flex items-center gap-10 text-xl">
                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> Careers </a>
                            </li>

                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> History </a>
                            </li>

                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> Services </a>
                            </li>

                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-gray-900 transition hover:text-gray-500/75" href="#"> Blog </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            <span className="flex items-center mb-4">
                <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-700"></span>
                <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-700"></span>
            </span>
            <Outlet />
        </header>
    )
}

export default Navbar