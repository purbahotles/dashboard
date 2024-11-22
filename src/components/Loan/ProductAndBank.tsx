import React from 'react';
import BankCardTwo from "@/components/Charts/BankCardTwo";
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import SearchForm from "@/components/Header/SearchForm";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

const bankData = [
  {
    bankName: "Mandiri",
    title: "Bunga Special Tengah Imlek 2023",
    logo: "/images/brand/brand-01.png",
    rating: 3,
    description: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."
  },
  {
    bankName: "Panin",
    title: "Panin KPR & KPR XTRA",
    logo: "/images/brand/brand-02.png",
    rating: 2,
    description: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-03.png",
    rating: 2,
    description: "null"
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-03.png",
    rating: 2,
    description: "null"
  },
  {
    bankName: "Mandiri",
    title: "Bunga Special Tengah Imlek 2023",
    logo: "/images/brand/brand-01.png",
    rating: 3,
    description: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."
  },
  {
    bankName: "Panin",
    title: "Panin KPR & KPR XTRA",
    logo: "/images/brand/brand-02.png",
    rating: 2,
    description: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak."
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-03.png",
    rating: 2,
    description: "null"
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-03.png",
    rating: 2,
    description: "null"
  },
];

const ProductAndBank: React.FC = () => {

  return (
    <>
      <div className='grid grid-cols-1 bg-white dark:bg-dark-2 p-5'>
        <div className="grid grid-cols-6 gap-4 my-5">
          <div className="md:col-span-5 col-span-4"><SearchForm /></div>
          <div className="">
            <ButtonDefault
                label="Sort"
                link="#"
                customClasses="border rounded-md bg-white text-black py-[11px] px-6 md:w-full"
              >
                <svg width="22" height="22" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="45" height="45" fill="url(#pattern0_6757_13954)"/>
                  <defs>
                  <pattern id="pattern0_6757_13954" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_6757_13954" transform="scale(0.015625)"/>
                  </pattern>
                  <image id="image0_6757_13954" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVR4nO2ZTUoDMRTH/0J1q2fQC0jBryN04xVKi4I3cOUXWK0LFcUeQJd6Crd6AcUTiIo7XRQbCWRgeGTSNm1m8vF+8BYNycx7v0kyoQMwDMMwDMMwjC3PAISKJ7hHkKiURQCDXDID1ZaMgH1NQnspCXjRJPQGYCYFAeuaZLJYS0FAzyDgJnYBswA+DAK+AMzFLGCTJPGuIt8m+0Qr4IEkcQXgmrTdxypgHsAPSWJVbXz5tl8ACzEK2Da89uhrcStGAY8kAXkYKjoYyb5RCVgy7PxFIcdEI+DAQkB+hgQv4NVCwLSPxpUJ2LAoPgt5bA5eQI/c+NbQ987h0bgyAZ/kxg1D3wbpK8cGL0CQqBn61hwm6o2AYUQnwBdYAHgGgJcAPNgExZjhKo/SECwAPANEyktgVNoA/kiSfSQioK0pXv5upiCgpSlefizdmfJ9vBTQKql4LwW0C6a9bJ+EXQB1CwF1NTboJ3+orvUNYGUMAcu5/y26CLx4USChSEC+eOFaQsvhmqcCqASdAF3xQl0ryA3vyCCBthcVf4aANjwdxwWf3Udpk2OnTrPE4jNOLI7ccowT+iUXn9Edo3inO7+YMCahM8L1z+EYUaGAYcvhAiUgKhYgOdVc9xIlITwQAPW0S33yPtJRwTAMwzAMw8CSfzq3ZbkhOvfCAAAAAElFTkSuQmCC"/>
                  </defs>
                </svg>
              </ButtonDefault>
          </div>
        </div>

        <div className="flex items-center space-x-2 my-2">
          <CheckboxTwo />
          <p className="font-bold text-md">
            Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market)
          </p>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
          {bankData.map((bank, index) => (
            <BankCardTwo
              key={index}
              bankName={bank.bankName}
              title={bank.title}
              logo={bank.logo}
              rating={bank.rating}
              description={bank.description}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <ButtonDefault
              label="UPDATE"
              link="#"
              customClasses="border W-50 rounded-md hover:bg-[#005999] bg-[#005274] text-white py-[11px] px-6"
            >
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H26.6667L35 13.3333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.3332 34.9998V21.6665H11.6665V34.9998" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6665 5V13.3333H24.9998" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </ButtonDefault>
          </div>
        </div>   
    </>
  );
};

export default ProductAndBank;
