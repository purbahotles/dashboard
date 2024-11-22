import React, { useState, ReactNode } from "react";

interface Panel {
  title: string;
  content: ReactNode;
}

interface ExpansionPanelProps {
  panels: Panel[];
  defaultOpenIndexes?: number[]; // Array indeks panel yang terbuka secara default
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  panels,
  defaultOpenIndexes = [],
}) => {
  const [openPanels, setOpenPanels] = useState<number[]>(defaultOpenIndexes);

  const togglePanel = (index: number) => {
    if (openPanels.includes(index)) {
      // Jika sudah terbuka, tutup panel
      setOpenPanels(openPanels.filter((i) => i !== index));
    } else {
      // Jika belum terbuka, tambahkan ke daftar terbuka
      setOpenPanels([...openPanels, index]);
    }
  };

  return (
    <div className="w-full">
      {panels.map((panel, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md w-full mb-10 overflow-hidden"
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 cursor-pointer text-white ${
              openPanels.includes(index) ? "bg-[#005274]" : "bg-blue"
            }`}
            onClick={() => togglePanel(index)}
          >
            <h2 className="text-lg font-semibold">{panel.title}</h2>
            <span
              className={`transform transition-transform ${
                openPanels.includes(index) ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-300 ${
              openPanels.includes(index) ? "max-h-[500px] p-4" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="text-gray-700">{panel.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpansionPanel;
