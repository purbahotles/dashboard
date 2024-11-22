import React from "react";
import { dataStats } from "@/types/dataStats";
import Image from "next/image";

const dataStatsList = [
  {
    icon: "/images/product/product-01.png",
    title: "KPR dan Multiguna",
  },

  {
    icon: "/images/product/product-02.png",
    title: "Refinancing",
  },

  {
    icon: "/images/product/product-03.png",
    title: "Kredit Modal Usaha dan Investasi",
  },

  {
    icon: "/images/product/product-04.png",
    title: "Deposito",
  },

  {
    icon: "/images/product/product-05.png",
    title: "Take Over dan Bridging Loan",
  },
  
];

const DataStatsTwo: React.FC<dataStats> = () => {
  return (
    <>
    <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-dark rounded-lg shadow-md py-4 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <Image src={item.icon} alt="Bank" width={80} height={80} />
              <h1 className="text-gray-500 max-w-48 text-center text-lg font-bold dark:text-white">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DataStatsTwo;
