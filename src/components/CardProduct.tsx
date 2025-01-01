'use client'

import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

const CardProduct = () => {
    return (
        <div className="bg-white py-5 px-4 border border-gray-200">
            <div className="relative h-40 overflow-hidden">
                <button className="absolute bg-gray-400 hover:bg-gray-500 size-8 rounded-full right-3 top-3 z-10 flex items-center justify-center">
                    <AiOutlineHeart className="size-4 text-white" />
                </button>
                <Image src="/product.webp" width={500} height={500} className="object-cover object-top" alt="product" />
            </div>
            <div className="mt-5">
                <h5 className="font-semibold leading-tight text-md truncate">Jacket Iqloo</h5>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar key={index} className="size-3 text-amber-500" />
                        ))}
                    </div>
                    <div className="block text-sm font-medium">(4.5)</div>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="font-bold text-sm">$195.00</div>
                    <button className="bg-black px-2 md:px-3 py-2 rounded-full flex items-center gap-2">
                        <div className="hidden md:block text-white text-xs font-semibold">Add to cart</div>
                        <BiPlus className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct