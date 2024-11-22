import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Hotles Purba",
  description: "Test Frontend",
};

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Category Product" />

      <h1>On Progress.....</h1>
    </DefaultLayout>
  );
};

export default FormLayout;
