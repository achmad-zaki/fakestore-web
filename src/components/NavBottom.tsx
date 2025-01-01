'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiHome5Line, RiSearchLine, RiHandbagLine } from "react-icons/ri";

const NavBottom = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
    }, [lastScrollY]);

    return (
        <div className={`lg:hidden fixed bottom-0 bg-white w-full transform-gpu py-4 border-t border-gray-300 ${show ? 'translate-y-0' : 'translate-y-full'} transition-smooth`}>
            <div className="flex justify-center gap-8 items-center">
                <Link href='#'>
                    <RiHome5Line className="size-6" />
                </Link>
                <Link href='#'>
                    <RiSearchLine className="size-6 text-gray-500" />
                </Link>
                <Link href='#'>
                    <RiHandbagLine className="size-6 text-gray-500" />
                </Link>
            </div>
        </div>
    )
}

export default NavBottom