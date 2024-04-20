import React from "react";
import Link from "next/link";
import { Search, Info, FileText, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubstationPage = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h2 className="font-semibold mb-4">Substation</h2>
      <div className="mb-4">
        <form className="flex flex-col md:flex-row gap-2 items-center">
          <Input
            className="w-full sm:w-[280px] focus-visible:ring-[#367fbf]"
            type="text"
            placeholder="Search"
          />
          <Button
            type="submit"
            className="bg-[#62abd9] rounded-sm text-white text-sm hover:bg-[#367fbf]"
          >
            <Search size={16} strokeWidth={2} color="#c4e5f2" />
          </Button>
        </form>
      </div>

      <div className="flex w-full flex-col">
        <div className="overflow-x-auto">
          <div className="flex w-full py-2 align-middle">
            <div className="w-full border border-gray-200 rounded-sm md:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-sm font-semibold text-left text-gray-500">
                      #
                    </th>

                    <th className="p-2 text-sm font-semibold text-left text-gray-500">
                      Name
                    </th>

                    <th className="p-2 text-sm font-semibold text-left text-gray-500">
                      IP Address
                    </th>

                    <th className="p-2 text-sm font-semibold text-left text-gray-500">
                      Contact
                    </th>

                    <th className="p-2 text-sm font-semibold text-left text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                      1
                    </td>
                    <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                      Ploso
                    </td>
                    <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                      192.168.1.10
                    </td>
                    <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                      082231317272
                    </td>
                    <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                      <div className="flex gap-2">
                        <Link
                          href="#"
                          className="flex gap-2 text-emerald-500 bg-emerald-100/60 px-2 py-1 rounded-sm items-center"
                        >
                          <Info size={16} />
                          Detail
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
        >
          <MoveLeft />

          <span>previous</span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
          <a
            href="#"
            className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60"
          >
            1
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            3
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            ...
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            12
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            13
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
          >
            14
          </a>
        </div>

        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
        >
          <span>Next</span>
          <MoveRight />
        </a>
      </div>
    </div>
  );
};

export default SubstationPage;
