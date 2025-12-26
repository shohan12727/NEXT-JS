import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2 ">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-5 mt-8">
          <Link className="px-4 py-2 w-full bg-gray-400 rounded" href={"/dashboard/add-story"}>Add Story</Link>
          <Link className="px-4 py-2 w-full bg-gray-400 rounded" href={"/dashboard/my-profile"}>My Profile</Link>
          <Link className="px-4 py-2 w-full bg-gray-400 rounded" href={"/dashboard/settings"}>Settings</Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
