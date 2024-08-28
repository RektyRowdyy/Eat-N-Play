import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return (
            <div className="fixed top-0 w-full bg-gray-800 rounded-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <Link to="">
                            <span>
                                <img src="Eat-N-Play-Logo.png" className="h-14 transform -rotate-12" />
                            </span>
                        </Link>
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-8 inline-flex space-x-8">
                            <li>
                                <NavLink to="" className="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="snooker" className="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Snooker</NavLink>
                            </li>
                            <li>
                                <NavLink to="cafe" className="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Cafe</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden space-x-2 lg:block">
                        <button type="button" className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Sign In
                        </button>
                        <button type="button" className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Log In
                        </button>
                    </div>
                    <div className="ml-4 mt-2 hidden lg:block">
                        <span className="relative inline-block">
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Dan_Abromov"
                            />
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                        </span>
                    </div>
                    <div className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
    )
}