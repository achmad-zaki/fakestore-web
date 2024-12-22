'use client'

import { useForm } from "react-hook-form";
import Button from "./common/Button";
import Input from "./common/Input";
import { urlApi } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface InputType {
    username: string;
    password: string;
}

const FormLogin = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<InputType>();

    console.log(errors)

    const onSubmit = async (data: InputType) => {
        setIsLoading(true);
        try {
            const res = await urlApi.post('/auth/login', data)

            if (res.status === 200) {
                localStorage.setItem('TOKEN', res.data?.token)
                setIsLoading(false);
                router.push('/');
            }
        } catch (err) {
            alert(err);
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <Input
                    error={errors.username}
                    {...register('username', {
                        required: 'tidak boleh kosong*',
                    })}
                    label="Username"
                    placeholder="Your Username"
                />
                <Input error={errors.password} {...register('password', { required: 'tidak boleh kosong' })} label="Password" placeholder="Your Password" type="password" />
            </div>
            <div className="mt-3">
                <li>username : mor_2314</li>
                <li>password : 83r5^_</li>
            </div>
            <Button type="submit" name="Submit" className="mt-5 w-full" />
        </form>
    )
}

export default FormLogin