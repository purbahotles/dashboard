import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DataStatsTwo from "@/components/DataStats/DataStatsTwo";
import FilterBank from "@/components/BankProduct/FilterBank";
import ListProductBank from "@/components/BankProduct/ListProductBank";
import Tabs from "@/components/Tabs";

const tabs = [
  {
    id: 'bank',
    label: 'Bank',
    content:
    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
      <DataStatsTwo />
      <FilterBank />
      <ListProductBank />
    </div>
    ,
  },
  {
    id: 'developer',
    label: 'Developer',
    content: <div>Hotles Purba</div>,
  },
];

export const metadata: Metadata = {
  title: "Hotles Purba",
  description: "Bank Product",
};

const BankProduct = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bank Product" />
      <Tabs tabs={tabs} />
    </DefaultLayout>
  );
};

export default BankProduct;
