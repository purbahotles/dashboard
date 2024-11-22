import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import InputText from "@/components/FormElements/InputText";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

export const metadata: Metadata = {
  title: "Hotles Purba",
  description: "Test Frontend",
};

const FormProductDetail = () => {
  return (
    <>
    
      <DefaultLayout>
      <Breadcrumb pageName="Product Detail" />

      <div className="bg-white mb-5 dark:bg-dark-2 text-dark-6 p-5">
        <div className="flex justify-between items-center">
          {/* H1 di kiri */}
          <h1 className="text-xl font-semibold">Bank Product Detail</h1>

          {/* Tombol di kanan */}
          <div className="flex gap-4">
            <ButtonDefault
              label="Edit Product"
              link="#"
              customClasses="bg-[#005274] text-white py-[11px] px-6 rounded-md"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6757_13327)">
                  <path
                    d="M11.9167 4.33325H4.33341C3.75878 4.33325 3.20768 4.56153 2.80135 4.96785C2.39502 5.37418 2.16675 5.92528 2.16675 6.49992V21.6666C2.16675 22.2412 2.39502 22.7923 2.80135 23.1987C3.20768 23.605 3.75878 23.8333 4.33341 23.8333H19.5001C20.0747 23.8333 20.6258 23.605 21.0321 23.1987C21.4385 22.7923 21.6667 22.2412 21.6667 21.6666V14.0833"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.0417 2.70825C20.4727 2.27728 21.0573 2.03516 21.6667 2.03516C22.2762 2.03516 22.8608 2.27728 23.2917 2.70825C23.7227 3.13923 23.9648 3.72376 23.9648 4.33325C23.9648 4.94275 23.7227 5.52728 23.2917 5.95825L13.0001 16.2499L8.66675 17.3333L9.75008 12.9999L20.0417 2.70825Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6757_13327">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ButtonDefault>

            <ButtonDefault
              label="Delete Product"
              link="#"
              customClasses="bg-[#FF0000] text-white py-[11px] px-6 rounded-md"
            >
              <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25 6.5H5.41667H22.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.5834 6.50008V21.6667C20.5834 22.2414 20.3551 22.7925 19.9488 23.1988C19.5425 23.6051 18.9914 23.8334 18.4167 23.8334H7.58341C7.00878 23.8334 6.45768 23.6051 6.05135 23.1988C5.64502 22.7925 5.41675 22.2414 5.41675 21.6667V6.50008M8.66675 6.50008V4.33341C8.66675 3.75878 8.89502 3.20768 9.30135 2.80135C9.70768 2.39502 10.2588 2.16675 10.8334 2.16675H15.1667C15.7414 2.16675 16.2925 2.39502 16.6988 2.80135C17.1051 3.20768 17.3334 3.75878 17.3334 4.33341V6.50008" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8333 11.9167V18.4167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.1667 11.9167V18.4167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </ButtonDefault>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
        <div className="grid grid-cols-1 gap-4 bg-white dark:bg-dark-2">
          <form action="#">
            <div className="p-6.5">
              <InputText label="Bank" value="Mandiri" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Nama Product" value="Bunga Special Tengah Imlek 2023" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Jaminan" value="Ruko, Rukan, Rumah, Apartemen" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Target Market" value="Karyawan, Pengusaha" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Komisi" value="1 %" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Appraisal" value="1 %" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Floating" value="1 %" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Loan to Value" value="1 %" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Penalty Fee" value="-" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Interest Rate" value="3.65 %" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Fix Rate (year)" value="3" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <InputText label="Max Tenor (year)" value="12" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
              <div className="mb-6">
                <div className="flex items-center space-x-5">
                  <label className="text-body-sm w-50 font-bold text-black dark:text-white">
                    Keterangan
                  </label>
                  <textarea
                    rows={2}
                    placeholder=""
                    value={"Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
              </div>
              <InputText label="URL" value="null" type="text" placeholder="" required customClasses="mb-4.5 w-full"/>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
    
    </>
    
    
  );
};

export default FormProductDetail;
