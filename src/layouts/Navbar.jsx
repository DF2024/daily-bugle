import DailyLogo from '../assets/logos/DailyLogo.jpg'
import logoblack from '../assets/logos/trompeta.png'
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef} from 'react';


const Navbar = () => {
    const mainNavRef = useRef(null);
    const [showStickyNav, setShowStickyNav] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setShowStickyNav(!entry.isIntersecting);
        },
        { threshold: 0 }
        );

        if (mainNavRef.current) {
        observer.observe(mainNavRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (
        <header className='bg-white'>
            <div 
            ref={mainNavRef}
            >
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
                                <Link to={'/history'}>
                                    <li>
                                        <a className="text-gray-900 transition hover:text-gray-500/75" href="/his"> History </a>
                                    </li>
                                </Link>

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
                
            </div>
            
            <div>

                <nav
                    className={`fixed top-0 left-0 w-full bg-black shadow-xl p-2 gap-5 flex items-center px-10 shadow-md transition-all duration-300 z-50 
                    ${showStickyNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
                >
                            <div className='flex items-center'>
                                <img src={logoblack} alt="trompeta" className='w-12'/>  
                            </div>

                            <div className='absolute left-1/2 -translate-x-1/2'>
                                <ul className="font-marriweather flex gap-10 text-sl font-bold">
                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> About </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> Careers </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> History </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> Services </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> Projects </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-100 transition hover:text-red-500/75" href="#"> Blog </a>
                                    </li>
                                </ul>
                            </div>
                </nav>
            </div>



            <Outlet />
        </header>
    )
}

export default Navbar