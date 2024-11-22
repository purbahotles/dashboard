import React from 'react';
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import ExpansionPanel from '@/components/ExpansionPanel/ExpansionPanel';


import FormAlamat from "./FormAlamat"


const AlamatLoan: React.FC = () => {
  const panels = [
    {
      title: "Data KTP",
      content: (
        <>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <FormAlamat />
          </div>
          <div className="flex items-center justify-between my-2 space-x-4">
            <div className="flex items-center space-x-2">
              <CheckboxTwo />
              <p className="font-bold text-black dark:text-white">
              Domisili Sesuai KTP
              </p>
            </div>
            <div>
              <ButtonDefault
                label="CLEAR"
                link="#"
                customClasses="border rounded-md hover:bg-[#FF2222] bg-[#FF0000] text-white py-[11px] px-6 flex items-center"
              >
              </ButtonDefault>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Data Domisili",
      content: (
        <>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <FormAlamat />
          </div>
          <div className="flex items-center justify-between my-2 space-x-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckboxTwo />
                <p className="font-bold text-black dark:text-white">
                  Alamat tempat Bekerja / perusahaan Sesuai KTP
                </p>
              </div>
              <div>
                <ButtonDefault
                  label="CLEAR"
                  link="#"
                  customClasses="border rounded-md hover:bg-[#FF2222] bg-[#FF0000] text-white py-[11px] px-6 flex items-center"
                >
                </ButtonDefault>
              </div>
            </div>
        </>
      ),
    },
    {
      title: "Data Alamat Tempat Bekerja",
      content: (
        <>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <FormAlamat />
          </div>
        </>
      ),
    },
  ]

  return (
    <>
    <div className='w-full mx-auto max-w-screen-2xl px-4 md:px-6 2xl:p-10 bg-white dark:bg-dark-2'>
      <ExpansionPanel panels={panels} defaultOpenIndexes={[0, 1, 2]}/>

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
  )
}

export default AlamatLoan;
