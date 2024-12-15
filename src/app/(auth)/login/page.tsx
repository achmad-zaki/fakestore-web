import { Images } from "@/assets/images/images";
import FormLogin from "@/components/FormLogin";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <Image src={Images.Signin} className="h-screen w-full object-cover object-top" alt="Sign in" />
                </div>
                <div className="px-8 flex items-center h-screen justify-center">
                    <div className="space-y-5">
                        <h1 className="text-2xl font-medium">Hi! Welcome to Wealth Wave dude</h1>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}
