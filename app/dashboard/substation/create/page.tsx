import React from "react";
import Link from "next/link";
import { MoveLeft, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const CreateSubstation = () => {
  return (
    <div className="flex-1 flex-col overflow-y-auto p-4">
      <div className="flex items-center justify-start mb-4 space-x-2">
        <Link
          href="/dashboard/substation"
          className="px-4 py-2 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-md"
        >
          <MoveLeft size={16} />
        </Link>
        <h2 className="font-semibold">Create New Substation</h2>
      </div>
      <div className="flex flex-col w-full text-sm space-y-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 items-center">
          <div className="grid gap-2 items-center">
            <Label>Substation</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
              placeholder="Substation Name"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Address</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label>Contact</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
              placeholder="Contact"
            />
          </div>
          <div className="grid gap-2 items-center">
            <Label htmlFor="dcc">DCC</Label>
            <Select>
              <SelectTrigger
                aria-label="dcc"
                id="dcc"
                className="focus:ring-[#367fbf]"
              >
                <SelectValue placeholder="Select DCC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="METROPOLIS">METROPOLIS</SelectItem>
                <SelectItem value="TIMUR">TIMUR</SelectItem>
                <SelectItem value="BARAT">BARAT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 items-center">
            <Label>IP Address</Label>
            <Input
              className="w-full focus-visible:ring-[#367fbf]"
              type="text"
              placeholder="IP Address"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="gap-x-2 bg-[#62abd9] text-white hover:bg-[#367fbf]"
        >
          <Save size={16} />
          Save
        </Button>
      </div>
    </div>
  );
};

export default CreateSubstation;
