import React from "react";

interface Document {
  title: string;
  placeholder: string;
}

interface FormDokumenProps {
  documents: Document[];
}

const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M26.25 18.75V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75"
      stroke="#646567"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.25 10L15 3.75L8.75 10"
      stroke="#646567"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3.75V18.75"
      stroke="#646567"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FormDokumen: React.FC<FormDokumenProps> = ({ documents }) => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2">
      {/* Bagian Judul Dokument */}
      <div className="md:col-span-3">
        {documents.map((doc, index) => (
          <React.Fragment key={index}>
            <p className="font-medium gap-4 md:my-9 my-5 text-md xs:text-xs">{doc.title}</p>
          </React.Fragment>
        ))}
      </div>

      {/* Bagian Input Upload */}
      <div className="md:col-span-2">
        {documents.map((doc, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center border rounded-md md:p-2 gap-4 my-5">
              <label className="relative flex items-center gap-2 cursor-pointer w-full">
                <span className="text-gray-600 flex-grow text-md xs:text-xs">{doc.placeholder}</span>
                <UploadIcon className="ml-auto" />
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer border"
                />
              </label>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FormDokumen;
