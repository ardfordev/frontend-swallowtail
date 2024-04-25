"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CalendarIcon, MoveLeft, Info, BookOpenText, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const CreateFeederPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex-1 flex-col overflow-y-auto p-4">
      <div className="flex items-center justify-start mb-4 space-x-2">
        <Link
          href="/dashboard/feeder"
          className="px-4 py-2 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-md"
        >
          <MoveLeft size={16} />
        </Link>
        <h2 className="font-semibold">Create New Feeder</h2>
      </div>
      <div className="flex flex-col w-full text-sm space-y-4">
        <h3 className="font-semibold">Data</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 items-center">
          <div className="grid gap-2 items-center">
            <Label>Date of Commissioning</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal focus:border-2 focus:border-blue-400 active:border-2 active:border-blue-400",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon size={16} className="mr-2" />
                  {date ? format(date, "dd MMM yyyy") : <span>Pilih hari</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2 items-center">
            <Label>Protocol/RTU Address</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Feeder</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label htmlFor="communicationmedia">Communication Media</Label>
            <Select>
              <SelectTrigger
                aria-label="Select communicationmedia"
                id="communicationmedia"
                className="focus:ring-[#367fbf]"
              >
                <SelectValue placeholder="Select Communication Media" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3G">3G</SelectItem>
                <SelectItem value="4G">4G</SelectItem>
                <SelectItem value="WIFI">WIFI</SelectItem>
                <SelectItem value="FO">FO</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 items-center">
            <Label htmlFor="substation">Substation</Label>
            <Select>
              <SelectTrigger
                aria-label="substation"
                id="substation"
                className="focus:ring-[#367fbf]"
              >
                <SelectValue placeholder="Select Substation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="altaprima">Altaprima</SelectItem>
                <SelectItem value="ploso">Ploso</SelectItem>
                <SelectItem value="Balongbendo">Balongbendo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 items-center">
            <Label>RTU Brands</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
            />
          </div>
        </div>

        <h3 className="font-semibold">Telestatus</h3>
        <div className="flex w-full flex-col">
          <div className="overflow-x-auto">
            <div className="flex w-full py-2 align-middle">
              <div className="w-full border border-gray-200 rounded-sm md:rounded-lg">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        #
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        OK
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        NOK
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        LOG
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        SLD
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        NT
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CB Open
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CB Close
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        Local
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        Remote
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        OCR Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        OCR App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        OCRI Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        OCRI App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        DGR Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        DGR App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CBTR Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CBTR App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        AR Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        AR App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        ARU Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        ARU App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        TC Diss
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        TC App
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-semibold">Telecontrol</h3>
        <div className="flex w-full flex-col">
          <div className="overflow-x-auto">
            <div className="flex w-full py-2 align-middle">
              <div className="w-full border border-gray-200 rounded-sm md:rounded-lg">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        #
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        OK
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        NOK
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        LOG
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        SLD
                      </th>

                      <th className="p-2 text-xs sm:text-sm font-semibold text-left text-gray-500">
                        NT
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CB Open
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        CB Close
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        ARU Use
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        ARU Unuse
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        Reset
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        TC Raiser
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                        TC Lower
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>

                      <td className="py-2 px-1 sm:px-2">
                        <Checkbox />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-semibold">Telemetering</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 items-center">
          <div className="grid gap-2 items-center">
            <Label>Phase R Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase S Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase T Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Power</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Voltage</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase R Fault Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase S Fault Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase T Fault Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Phase N Fault Current</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="MS"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="RTU"
            />
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="number"
              placeholder="Scale"
            />
          </div>
        </div>
        <h3 className="font-semibold">PIC</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 items-center">
          <div className="grid gap-2 items-center">
            <Label htmlFor="commissioningtypes">Commissioning Types</Label>
            <Select>
              <SelectTrigger
                aria-label="Select commissioningtypes"
                id="commissioningtypes"
                className="focus:ring-[#367fbf]"
              >
                <SelectValue placeholder="Commissioning Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="integration">Integration</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 items-center">
            <Label>MS Engineer</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>RTU Engineer</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Description</Label>
          <Textarea />
        </div>
        <Button
          asChild
          type="submit"
          className="gap-x-2 bg-[#62abd9] text-white hover:bg-[#367fbf]"
        >
          <Link href="/dashboard/feeder">
            <Save size={16} />
            Save
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CreateFeederPage;
