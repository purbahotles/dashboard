import Dasboard from "@/components/Dashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export const metadata: Metadata = {
  title:
    "Hotles Purba",
  description: "This is Next.js Home page",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dasboard />
      </DefaultLayout>
    </>
  );
}
