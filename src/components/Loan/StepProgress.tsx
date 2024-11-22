import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface StepProgressProps {
  steps: string[];
  descriptions: string[];
  currentStep: number;
  onPrevious: () => void;
  onNext: () => void;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, descriptions, currentStep, onPrevious, onNext }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Menyinkronkan ukuran setelah render
    setWidth(document.getElementById('steps-container')?.offsetWidth || 0);
  }, []);

  return (
    <div className="flex flex-col items-center w-full" id="steps-container">
      {/* Steps */}

      <div className="overflow-x-auto relative p-2 py-10 bg-white dark:bg-dark-2 w-screen md:w-full flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative z-10"
            style={{
              flex: 1,
              textAlign: index === 0 || index === steps.length - 1 ? 'center' : 'center', // Adjust text align for first and last
            }}
          >
            {/* Horizontal Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute bottom-[0.5px] md:bottom-7.5 w-full ml-6 md:ml-35 md:mb-200 md:p-1 transform -translate-y-1/2 h-[2px] ${
                  index < currentStep ? 'bg-[#005274]' : 'bg-[#C1C1C1]'
                }`}
              ></div>
            )}


            {/* Circle */}
            <div
              className={`text-sm w-3 h-3 md:w-6 md:h-6 z-9999 rounded-full flex items-center justify-center text-white font-bold ${
                index < currentStep ? 'bg-[#005274]' : index === currentStep ? 'bg-blue' : 'bg-[#C1C1C1]'
              }`}
            >
            </div>
            
            {/* Step Label */}
            <p
              className={`mt-2 md:text-sm text-[1px] ${
                index <= currentStep ? 'text-[#005274] dark:text-blue' : 'text-[#C1C1C1]'
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between w-full mx-auto max-w-screen-2xl px-4 md:px-6 2xl:p-10">
        <button
          onClick={onPrevious}
          className="px-3 py-2 text-white bg-blue rounded-full disabled:opacity-50"
          disabled={currentStep === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </button>

        <div className="text-center font-bold">
          <h1 className="text-2xl text-black dark:text-white">
            {steps[currentStep]}
          </h1>
          <p className="text-sm md:text-md text-gray-600">{descriptions[currentStep]}</p>
        </div>

        <button
          onClick={onNext}
          className="px-3 py-2 text-white bg-blue rounded-full disabled:opacity-50"
          disabled={currentStep === steps.length - 1}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};


export default StepProgress;
