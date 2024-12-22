'use client'

import { Input } from "@headlessui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { RiSearchLine } from "react-icons/ri"
import { IoClose } from "react-icons/io5";

const SearchInput = () => {
    const placeholderTexts = [
        "TV Smart 16 inch", "Laptop Gaming", "Headset Wireless", "Smartphone 5G"
    ]

    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [placeholderTexts.length]);

    const handleClearText = () => {
        setInputValue("");
    }

    return (
        <div className="hidden relative flex-1 lg:flex items-center justify-start">
            <Input type="text" className="h-12 pl-10 pr-9 w-full rounded-lg bg-gray-100 outline-none data-[focus]:border data-[focus]:border-gray-300" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {!inputValue && (
                <div className="absolute inset-0 z-10 flex items-center pl-[43px] pointer-events-none text-gray-500">
                    <motion.span
                        className="font-medium text-gray-400"
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                    >
                        {placeholderTexts[index]}
                    </motion.span>
                </div>
            )}
            {inputValue && (
                <button onClick={handleClearText} className="absolute mr-3 right-0 bg-gray-600 rounded-full p-1">
                    <IoClose className="size-3 text-white" />
                </button>
            )}
            <RiSearchLine className="size-6 absolute left-2 text-gray-500" />
        </div>
    )
}

export default SearchInput