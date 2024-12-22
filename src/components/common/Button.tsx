import { Button as CustomButton } from "@headlessui/react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    name: string;
    className?: string;
    size?: 'lg' | 'default' | 'sm',
    type?: 'submit' | 'button' | 'reset'
}

const Button: FC<ButtonProps> = ({ name, className, size = 'default', type = 'button' }) => {

    const sizeButton = {
        lg: 'py-4 px-8',
        default: 'py-3 px-6',
        sm: 'py-2 px-4'
    }

    return (
        <CustomButton
            type={type}
            className={twMerge(`rounded-full bg-purple-800 text-sm text-white data-[hover]:bg-purple-600 data-[active]:bg-purple-700 transition-smooth font-medium`, className, sizeButton[size])}
        >
            {name}
        </CustomButton>
    )
}

export default Button