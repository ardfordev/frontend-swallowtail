import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Grid2X2, Container, Warehouse, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Swallowtail",
  description: "Commissioning Data Platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen bg-white font-jakarta">
      <div className="flex flex-col sm:w-56 gap-1 p-4 border-r border-gray-200">
        <Link className="flex w-full justify-center items-center mb-5" href="/">
          <Image src="/logo.png" alt="swallowtail" width={24} height={24} />
          <span className="hidden sm:flex ml-2 font-semibold font-jakarta text-lg">
            swallowtail
          </span>
        </Link>
        <span className="text-xs text-gray-500">Menu</span>
        <Link
          href="/dashboard"
          className="flex p-2 gap-2 text-sm font-semibold items-center text-neutral-950 hover:bg-neutral-200 hover:rounded-sm"
        >
          <Grid2X2 size={16} strokeWidth={1.5} color="#367fbf" />
          <span className="hidden sm:flex">Dashboard</span>
        </Link>
        <Link
          href="/dashboard/feeder"
          className="flex p-2 gap-2 text-sm font-semibold items-center text-neutral-900 hover:bg-neutral-100 hover:rounded-sm"
        >
          <Container size={16} strokeWidth={1.5} color="#367fbf" />
          <span className="hidden sm:flex">Feeder</span>
        </Link>
        <Link
          href="/dashboard/substation"
          className="flex p-2 gap-2 text-sm font-semibold items-center text-neutral-900 hover:bg-neutral-100 hover:rounded-sm"
        >
          <Warehouse size={16} strokeWidth={1.5} color="#367fbf" />
          <span className="hidden sm:flex">Substation</span>
        </Link>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between border-b border-gray-200 p-4">
          <h2 className="font-semibold text-lg text-[#367fbf]">Dashboard</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Heru Herawan
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    heru@bcd.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link className="flex items-center" href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
        <div className="flex justify-end border-t border-gray-200 px-4 py-2 text-xs font-light">
          Developed by ard
        </div>
      </div>
    </div>
  );
}
