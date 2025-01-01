'use client'

import Link from "next/link"
import SearchInput from "./SearchInput";
import { FiHeart } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(55);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className="bg-black text-white text-center py-1 font-semibold text-sm">Mega Sell DISC - 50%</div>
            <header className={`sticky top-0 py-4 z-50 bg-white transition-smooth ${show ? 'translate-y-0 border-b border-gray-300' : '-translate-y-full'}`}>
                <div className="px-4 flex items-center justify-between">
                    <div className="flex items-center gap-8 flex-1">
                        <div className="text-purple-700 font-bold text-lg md:text-2xl">Fake - Store</div>
                        <div className="hidden lg:flex gap-5 font-semibold text-gray-400">
                            <Link href="#" className="text-gray-700">Home</Link>
                            <Link href="#">Explore</Link>
                        </div>
                    </div>
                    <SearchInput />
                    <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
                        <button className="hover:bg-gray-100 p-3 rounded-full transition-smooth">
                            <FiHeart className="size-5" />
                        </button>
                        <button className="hover:bg-gray-100 p-3 rounded-full transition-smooth">
                            <SlHandbag className="size-5" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar