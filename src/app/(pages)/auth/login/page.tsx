import React from "react";
import Image from "next/image";
import { LoginForm } from "./form";

export default function Page() {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 my-4`}>
      <Image
        src={`/images/auth/auth-side.svg`}
        alt={`auth-side-image`}
        width={500}
        height={781}
        priority
        draggable={false}
        loading="eager"
        className="xl:min-w-2xl lg:min-w-72 lg:block hidden object-contain object-center"
      />
      <div className="xl:w-md lg:w-96 md:max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  );
}
