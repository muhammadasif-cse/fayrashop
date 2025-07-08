'use client';

import React from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";

export default function Form() {
    // submit form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (Object.keys(data).length !== 0) {
            // check if password and confirm password are same
            if (data.password !== data.confirmPassword) {
                toast.error("Password and Confirm Password do not match");
                return;
            }
        }
        console.log(data);
    }


    let inputStyle: string = `!border-b-2 px-1 border-0 shadow-none outline-none rounded-none focus-visible:ring-0 focus-visible:outline-none`

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} action="" className={`flex flex-col gap-4 mt-12`}>
                <Input required={true} name={`name`} className={inputStyle} type="text" placeholder="Name"/>
                <Input required={true} name={`email`} className={inputStyle} type="email" placeholder="Email"/>
                <Input required={false} name={`phone`} className={inputStyle} type="number" placeholder="Phone Number"/>
                <Input required={true} name={`password`} className={inputStyle} type="password" placeholder="Password"/>
                <Input required={true} name={`confirmPassword`} className={inputStyle} type="password" placeholder="Confirm Password"/>
                <Button className={`py-6 rounded-sm mt-6`} type={`submit`} variant={`danger`}>
                    Create Account
                </Button>
                <Button variant={`outline`} className={`py-6 rounded-sm`}>
                    <Image src={`/images/auth/google-icon.svg`} alt={`google-icon`} width={24} height={24}/>
                    Sign up with Google
                </Button>
                <article className={`mt-4 font-normal text-base flex gap-4 justify-center`}>
                    <p>Already have account?</p>
                    <Link className={`font-medium border-b-2 border-black/40`} href={"/auth/login"}>Log in</Link>
                </article>
            </form>
        </div>
    )
}
