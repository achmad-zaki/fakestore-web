import { Field, Label, Input as CustomInput } from "@headlessui/react";
import React, { FC, useState } from "react";
import { FieldError } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: 'password' | 'text';
    placeholder: string;
    error?: FieldError | undefined;
}

const Input: FC<InputProps> = ({
    label,
    type = 'text',
    placeholder,
    error,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <Field>
            <Label className="text-md font-medium text-neutral-700 block mb-1">{label}</Label>
            {type === 'password' ? (
                <div className="relative w-full">
                    <CustomInput
                        {...props}
                        invalid={error ? true : false}
                        type={`${showPassword ? "text" : "password"}`}
                        className="data-[invalid]:border-red-500 data-[invalid]:ring-2 data-[invalid]:ring-red-600 w-full border rounded-full outline-none border-gray-300 py-3 pl-4 pr-14 data-[focus]:bg-gray-50"
                        placeholder="Your Username"
                    />
                    <div className="absolute z-10 right-0 inset-y-0 pr-1 flex items-center">
                        <button onClick={handleShowPassword} className="bg-gray-100 size-10 flex justify-center items-center rounded-full hover:bg-gray-200 transition-smooth">
                            {showPassword ? <LuEyeClosed className="size-4 text-neutral-800" /> :
                                <LuEye className="size-4 text-neutral-800" />
                            }
                        </button>
                    </div>
                </div>
            ) : (
                <CustomInput
                    {...props}
                    type={type}
                    invalid={error ? true : false}
                    className="w-full data-[invalid]:border-red-500 data-[invalid]:ring-2 data-[invalid]:ring-red-600 border rounded-full outline-none border-gray-300 py-3 px-4 data-[focus]:bg-gray-50"
                    placeholder={placeholder}
                />
            )}
            {error && (
                <div className="mt-1 text-sm italic text-red-500 font-medium">{error?.message}</div>
            )}
        </Field>
    )
}

export default Input