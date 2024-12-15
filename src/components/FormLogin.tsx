'use client'

import { useForm } from "react-hook-form";
import Button from "./common/Button";
import Input from "./common/Input";

interface InputType {
    username: string;
    password: string;
}

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputType>();

    console.log(errors)

    const onSubmit = (data: InputType) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <Input
                    error={errors.username}
                    {...register('username', {
                        required: 'tidak boleh kosong*', pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'email tidak valid*',
                        },
                    })}
                    label="Username"
                    placeholder="Your Username"
                />
                <Input error={errors.password} {...register('password', { required: 'tidak boleh kosong' })} label="Password" placeholder="Your Password" type="password" />
            </div>
            <Button type="submit" name="Submit" className="mt-5 w-full" />
        </form>
    )
}

export default FormLogin