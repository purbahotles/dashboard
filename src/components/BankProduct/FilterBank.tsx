import React from "react";
import SearchForm from "@/components/Header/SearchForm";
import SelectGroupTwo from "@/components/FormElements/SelectGroup/SelectGroupTwo";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

const FilterBank = () => {
  return (
    <>
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <SearchForm />
        <SelectGroupTwo />

        <div className="grid grid-cols-2 gap-4">
          <ButtonDefault
            label="Sort"
            link="#"
            customClasses="border rounded-md bg-white text-black py-[11px] px-6 w-full"
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


          <ButtonDefault
            label="Tambah Product"
            link="#"
            customClasses="bg-primary rounded-[5px] text-white py-[11px] px-6 w-full"
          >
            <svg width="22" height="22" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 9.375V35.625" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.375 22.5H35.625" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </ButtonDefault>

        </div>
        
      </div>
    </>
  );
};

export default FilterBank;
