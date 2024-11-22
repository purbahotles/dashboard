"use client";
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="flex flex-col items-center">
      {/* Tab Menu */}
      <div className="flex justify-center gap-5 w-full bg-white dark:bg-dark-2 pt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-5 text-lg w-20 font-medium ${
              activeTab === tab.id
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 w-full">
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id} className="px-4 py-2">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
