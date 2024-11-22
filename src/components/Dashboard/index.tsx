"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ProfileBox from "@/components/ProfileBox";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const ECommerce: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Dashboard"/>
      <ProfileBox />
      <div className="mx-auto max-w-screen-2xl p-4 grid-row-auto md:px-6 2xl:px-10">
        <div className="grid h-screen md:grid-cols-3 grid-cols-1 gap-4">

          <div className="md:col-span-2">
            <DataStatsOne />
            <ChartTwo />
            <ChartThree />
          </div>
          <div className="">
            <ChatCard />
          </div>

        </div>   
      </div>

      
    </>
  );
};

export default ECommerce;