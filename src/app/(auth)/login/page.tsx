import { Images } from "@/assets/images/images";
import { Logos } from "@/assets/logos/logos";
import FormLogin from "@/components/FormLogin";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <Image src={Images.Signin} className="h-screen w-full object-cover object-top" alt="Sign in" />
                </div>
                <div className="px-5 lg:px-20 flex flex-col items-center h-screen justify-around">
                    <div className="flex items-center gap-2">
                        <Image src={Logos.Fakestore} className="size-10" width={50} height={50} alt="Logo" />
                        <h3 className="text-xl font-medium text-[#802C71]">Fakestore</h3>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-4xl font-medium">Hi! Welcome to Wealth Wave dude</h1>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}
