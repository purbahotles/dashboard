"use client";
import React from 'react';
import Image from 'next/image';
import { BankCardProps } from '@/types/bankCard';
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChartColumn, faClock, faClockRotateLeft, faUser, faShield, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const BankCardOne: React.FC<BankCardProps> = ({
    bankName,
    title,
    logo,
    rating,
    users,
    fixRate,
    collateral,
    maxTenor,
    target,
    loanToValue,
    commission,
  }) => {
    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-dark-2 border my-5 pb-5'>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center mb-4">
              <Image src={logo} alt={bankName} width={200} height={200} />
            </div>
            <div className="grid grid-cols-2 gap-4 justify-center text-center">
              <div>
                <p className="text-sm text-gray-500">Rating:</p>
                <div className="flex justify-center text-sm my-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      transform={{ size: 15 }}
                      // className={`text-sm text-blue ${i >= rating && 'text-gray-300'}`}
                      className={i < rating ? 'text-blue' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-xs text-black dark:text-white">14 Reviews</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">User:</p>
                <p className="text-lg my-1 font-bold">{users}</p>
                <p className="text-xs text-black dark:text-white">Users yearly</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 col-span-1">
            <h1 className="text-xl font-bold my-5">
              <span className="px-2 text-gray-500">{bankName}</span>
              <span className="px-2 text-blue">{title}</span>
            </h1>

            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mx-2">
              <div>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faChartColumn} className="text-gray-400 max-w-8 mr-2" />
                  Fix Rate: {fixRate}
                </p>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faClock} className="text-gray-400 max-w-8 mr-2" />
                  <span>Max Tenor : {maxTenor}</span>
                </p>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faClockRotateLeft} className="text-gray-400 max-w-8 mr-2" />
                  Loan to Value : {loanToValue}
                </p>
              </div>
              <div>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faShield} className="text-gray-400 max-w-8 mr-2" />
                  Jaminan : {collateral}
                </p>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faUser} className="text-gray-400 max-w-8 mr-2" />
                  Target : {target}
                </p>
                <p className="my-4 flex items-center">
                  <FontAwesomeIcon transform={{ size: 9 }} icon={faFileInvoiceDollar} className="text-gray-400 max-w-8 mr-2" />
                  Komisi : {commission}
                </p>
              </div>
              <div>
                <ButtonDefault
                  label="Detail"
                  link="/product/bank-product-detail"
                  customClasses="border border-primary rounded-[5px] text-primary py-[11px] px-6 max-w-50 hover:bg-blue hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default BankCardOne;