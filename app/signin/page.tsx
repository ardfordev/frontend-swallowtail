import React from "react";
import Pattern from "@/components/pattern";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-screen">
        <Pattern />
      </div>
      <div className="container">
        <div className="relative w-full h-screen">
          <div className="absolute m-auto left-0 right-0 top-0 bottom-0 w-full sm:w-96 h-1/2 sm:h-4/6 bg-neutral-100 drop-shadow-xl rounded-xl">
            <div className="flex flex-col p-5 gap-2">
              <div className="flex w-full justify-center">
                <Image
                  src="/logo.png"
                  alt="swallowtail"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="text-center text-xl font-semibold font-jakarta mb-5">
                Sign in to your account
              </h2>
              <form action="#" className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm text-neutral-600">
                    Email
                  </Label>
                  <Input type="email" placeholder="Email" id="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="password"
                    className="text-sm text-neutral-600"
                  >
                    Password
                  </Label>
                  <Input type="password" placeholder="Password" id="password" />
                </div>
                <Button
                  type="submit"
                  className="text-white bg-neutral-800 hover:bg-neutral-500 mt-5"
                >
                  Sign in
                </Button>
              </form>
              <p className="text-xs text-center text-gray-500 sm:mt-2">
                Contact the Administrator for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
