export default function Navbar() {
    return (
        <>
            <div class="fixed top-0 w-full bg-gray-800 rounded-sm">
                <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div class="inline-flex items-center space-x-2">
                        <span>
                            <img src="\eatNplayLogo.png" className="h-14 transform -rotate-12" />
                        </span>
                    </div>
                    <div class="hidden grow items-start lg:flex">
                        <ul class="ml-8 inline-flex space-x-8">
                            <li>
                                <a href="#" class="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Home</a>
                            </li>
                            <li>
                                <a href="#" class="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Snooker</a>
                            </li>
                            <li>
                                <a href="#" class="inline-flex items-center text-base font-semibold text-white hover:text-red-400">Cafe</a>
                            </li>
                        </ul>
                    </div>
                    <div class="hidden space-x-2 lg:block">
                        <button type="button" class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Sign In
                        </button>
                        <button type="button" class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Log In
                        </button>
                    </div>
                    <div class="ml-4 mt-2 hidden lg:block">
                        <span class="relative inline-block">
                            <img
                                class="h-10 w-10 rounded-full object-cover"
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Dan_Abromov"
                            />
                            <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                        </span>
                    </div>
                    <div class="lg:hidden">
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
                            class="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}