import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex-1 flex-col overflow-y-auto p-4">
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/5 justify-between items-center border border-gray-200 gap-1 rounded-md p-4">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-neutral-800">Feeder</h3>
            <p className="text-sm text-neutral-500">Total</p>
          </div>
          <p className="text-3xl font-bold text-[#367fbf]">50</p>
        </div>
        <div className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/5 justify-between items-center border border-gray-200 gap-1 rounded-md p-4">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-neutral-800">
              Substation
            </h3>
            <p className="text-sm text-neutral-500">Total</p>
          </div>
          <p className="text-3xl font-bold text-[#367fbf]">20</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
