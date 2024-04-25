import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full h-[700px] flex flex-col items-center container">
        <div className="w-full sm:w-5/6 xl:w-3/6 backdrop-blur-sm bg-white/20 ring-1 ring-gray-200 h-12 rounded-2xl sticky top-5 p-2 flex items-center justify-between">
          <Link className="flex items-center" href="/">
            <Image src="/logo.png" alt="swallowtail" width={24} height={24} />
            <span className="ml-2 font-semibold font-jakarta text-lg">
              swallowtail
            </span>
          </Link>
          <div className="hidden sm:flex gap-4 text-sm text-gray-500">
            <Link
              href="#"
              className="px-2 py-1 hover:bg-gray-100 hover:rounded-sm"
            >
              Manual
            </Link>
            <Link
              href="#"
              className="px-2 py-1 hover:bg-gray-100 hover:rounded-sm"
            >
              About
            </Link>
          </div>
          <div className="hidden sm:flex gap-4 text-sm">
            <Link
              href="/signin"
              className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:rounded-sm"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="px-4 py-1 rounded-lg text-white bg-neutral-800 hover:bg-gray-100 hover:text-gray-500"
            >
              Get Started
            </Link>
          </div>
          <div className="sm:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Menu />
              </DialogTrigger>
              <DialogContent className="max-w-sm top-40 rounded-2xl">
                <div className="flex flex-col gap-4">
                  <Link className="flex items-center" href="/">
                    <Image
                      src="/logo.png"
                      alt="swallowtail"
                      width={24}
                      height={24}
                    />
                    <span className="ml-2 font-semibold font-jakarta text-lg">
                      swallowtail
                    </span>
                  </Link>
                  <span className="text-xs text-gray-500">Menu</span>
                  <Link
                    href="#"
                    className="p-2 text-sm hover:bg-gray-100 hover:rounded-sm"
                  >
                    Manual
                  </Link>
                  <Link
                    href="#"
                    className="p-2 text-sm hover:bg-gray-100 hover:rounded-sm"
                  >
                    About
                  </Link>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <Link
                      href="/signin"
                      className="py-2 text-center text-gray-500 hover:bg-gray-100 hover:rounded-sm"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="#"
                      className="py-2 text-center rounded-lg text-white bg-neutral-800 hover:bg-gray-100 hover:text-gray-500"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-full mt-28 flex flex-col justify-center gap-8">
          <h1 className="w-8/12 mx-auto text-center text-balance text-3xl sm:text-5xl leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-[#367fbf] via-[#c4e5f2] to-[#62abd9] text-transparent bg-clip-text">
              Blockchain-integrated
            </span>{" "}
            application platform for Commissioning Data
          </h1>
          <p className="w-8/12 mx-auto text-center text-balance text-sm sm:text-lg text-gray-500">
            Manage commissioning data at scale with complete security.
          </p>
        </div>
      </div>
      <div className="rounded-t-3xl mt-10 bg-[#1E1E1E]">
        <div className="px-8">
          <div className="w-full flex py-10 gap-4">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <p className="font-bold text-white">swallowtail</p>
          </div>
          <div className="w-full flex items-center border-t border-[#3b3b3b] justify-between py-10">
            <div className="grid grid-cols-1 items-center sm:w-1/2 sm:flex sm:justify-between md:w-1/3">
              <a
                href="#"
                className="font-light text-neutral-600 text-xs hover:text-white"
              >
                &copy; 2024 swallowtail
              </a>
              <a
                href="#"
                className="font-light text-neutral-600 text-xs hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-light text-neutral-600 text-xs hover:text-white"
              >
                Privacy & Cookies policy
              </a>
            </div>
            <p className="text-neutral-500 text-xs md:text-base">
              ardisuprieadi@proton.me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
