import "./Home.css"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
            <div className="min-h-full w-full mt-52">
                <div className="flex justify-center items-center ">
                    <img src="Eat-N-Play-Logo.png" alt="Eat N Play Logo" className="h-72 mr-16" />
                </div>
                <div>
                    <h1 className="flex justify-center items-center text-white text-7xl font-bold font-sans">
                        Welcome to Eat N Play
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-7 mr-1">
                    <Link to="cafe">
                        <button type="button" className="inline-flex items-center rounded-md bg-red-400 w-40 px-6 py-3 text-base font-semibold text-white hover:bg-black/80 mr-5 justify-center">
                            <ArrowLeft className="mr-2 h-6 w-6" />
                            Cafe
                        </button>
                    </Link>
                    <Link to="snooker">
                        <button type="button" className="inline-flex items-center rounded-md bg-green-700 w-40 px-6 py-3 text-base font-semibold text-white hover:bg-black/80 justify-center">
                            Snooker
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </button>
                    </Link>
                    
                </div>
            </div>
    )
}


