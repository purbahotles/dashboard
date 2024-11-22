import React from 'react';
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ExpansionPanel from '@/components/ExpansionPanel/ExpansionPanel';
import FormDokumen from "./FormDokumen"

const dataPribadi = [
  { title: "Fotokopi KTP Pemohon", placeholder: "--Upload Fotokopi KTP Pemohon--" },
  { title: "Fotokopi KTP Suami / Istri", placeholder: "--Upload Fotokopi KTP Suami / Istri--" },
  { title: "Fotokopi Kartu Keluarga", placeholder: "--Upload Fotokopi Kartu Keluarga--" },
  { title: "Fotokopi Akte Nikah/Cerai", placeholder: "--Upload Fotokopi Akte Nikah/Cerai--" },
  { title: "Fotokopi NPWP Pemohon", placeholder: "--Upload Fotokopi NPWP Pemohon--" },
  { title: "Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)", placeholder: "--Upload Akta Pisah Harga Notaril--" },
];

const dataJaminan = [
  { title: "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir", placeholder: "--Upload Fotokopi Dokumen Jaminan--" },
  { title: "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan", placeholder: "--Upload PDF Surat Pengajuan Bank--" },
  { title: "Fotokopi Perjanjian Kredit (Jika Over Kredit)", placeholder: "--Upload Fotokopi Perjanjian Kredit--" },
  { title: "Dokumen PPJB (Jika Developer)", placeholder: "--Upload Dokumen PPJB--" },
];

const dataKeuangan = [
  { title: "Fotokopi SPT / PPh21", placeholder: "--Upload Fotokopi SPT / PPh21--" },
  { title: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir", placeholder: "--Upload Asli Slip Gaji 1 Bulan Terakhir--" },
  { title: "Fotokopi R/K atau tabungan 6 bulan terakhir", placeholder: "--Upload Fotokopi R/K 6 Bulan Terakhir--" },
  { title: "Surat Keterangan / Rekomendasi Perusahaan", placeholder: "--Upload Surat Keterangan Perusahaan--" },
];

const dataTambahan = [
  { title: "File Kekurangan 1", placeholder: "--Upload File Kekurangan 1--" },
  { title: "File Kekurangan 2", placeholder: "--Upload File Kekurangan 2--" },
];



const DokumenLoan: React.FC = () => {
  const panels = [
    {
      title: "Data Pribadi",
      content: (
        <>
          <FormDokumen documents={dataPribadi}/>
        </>
      ),
    },
    {
      title: "Data Jaminan",
      content: (
        <>
          <FormDokumen documents={dataJaminan}/>
        </>
      ),
    },
    {
      title: "Data Keuangan",
      content: (
        <>
          <FormDokumen documents={dataKeuangan}/>
        </>
      ),
    },
    {
      title: "Data Tambahan",
      content: (
        <>
          <FormDokumen documents={dataTambahan}/>
        </>
      ),
    },
  ]

  return (
    <>
    <div className='w-full mx-auto max-w-screen-2xl px-4 md:px-6 2xl:p-10 bg-white dark:bg-dark-2'>
      <ExpansionPanel panels={panels} defaultOpenIndexes={[0, 1, 2, 3]}/>

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

export default DokumenLoan;
