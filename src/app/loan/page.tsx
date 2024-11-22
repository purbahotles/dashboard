import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loan from "@/components/Loan";

export const metadata: Metadata = {
  title: "Hotles Purba",
  description:
    "Test Frontend",
  // other metadata
};

const LoanPage = () => {
  return (
    <DefaultLayout>
        <Breadcrumb pageName="Loan" />
        <Loan />
    </DefaultLayout>
  );
};

export default LoanPage;
