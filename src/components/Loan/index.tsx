"use client";
import React, { useState } from 'react';
import StepProgress from './StepProgress';
import ProductAndBank from './ProductAndBank';
import AlamatLoan from './Alamat';
import Dokumen from './Dokumen';

const steps = [
  'Pilihan Product & Bank',
  'Alamat',
  'Upload Dokument',
  'Pinjaman',
  'Pekerjaan',
  'Informasi Asset',
  'Informasi Tambahan',
  'Review',
  'Bank Officer',
  'Surat Keterangan',
];

const descriptions = [
  'Pilih produk dan bank yang sesuai.',
  '',
  'Silahkan upload dokumen yang dibutuhkan',
  'Informasi terkait pinjaman Anda.',
  'Detail pekerjaan yang dimiliki.',
  'Data asset Anda.',
  'Informasi tambahan jika diperlukan.',
  'Tinjau informasi sebelum dikirim.',
  'Hubungi petugas bank untuk proses lebih lanjut.',
  'Unggah surat keterangan sesuai kebutuhan.',
];

const MyPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="">
      <StepProgress
        steps={steps}
        descriptions={descriptions}
        currentStep={currentStep}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {/* Step Content Based on currentStep */}
      <div className="step-content mt-4">
        {/* Konten untuk setiap step */}
        <div className="step-detail mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
          {/* Konten spesifik untuk setiap step */}
          {currentStep === 0 && <div><ProductAndBank /></div>}
          {currentStep === 1 && <div><AlamatLoan/></div>}
          {currentStep === 2 && <div><Dokumen/></div>}
          {currentStep === 3 && <div>Konten untuk Informasi Asset</div>}
          {currentStep === 4 && <div>Konten untuk Informasi Tambahan</div>}
          {currentStep === 5 && <div>Konten untuk Upload Dokumen</div>}
          {currentStep === 6 && <div>Konten untuk Review</div>}
          {currentStep === 7 && <div>Konten untuk Pilihan Product & Bank</div>}
          {currentStep === 8 && <div>Konten untuk Bank Officer</div>}
          {currentStep === 9 && <div>Konten untuk Surat Keterangan</div>}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
