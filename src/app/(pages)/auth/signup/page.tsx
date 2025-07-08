import React from 'react'
import Image from "next/image";
import Form from "@/app/(pages)/auth/signup/form";

export default function Page() {

    return (
        <div className={`flex flex-wrap items-center justify-between xl:gap-32 gap-16 my-10`}>
            <Image src={`/images/auth/auth-side.svg`} alt={`auth-side-image`} width={500} height={781}
                   className="flex-1 lg:h-[781px] h-96 object-cover object-center"/>
            <div className={`lg:w-fit w-full text-black/70`}>
                <h2 className={`text-4xl font-medium`}>Create an account</h2>
                <p className={`font-normal text-base mt-6`}>Enter your details below</p>
                <Form/>
            </div>
        </div>
    )
}
