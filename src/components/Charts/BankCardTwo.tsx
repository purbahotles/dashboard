import React from 'react';
import Image from 'next/image';
import { BankCardProps } from '@/types/bankCard';
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BankCardTwo: React.FC<BankCardProps> = ({
    bankName,
    title,
    logo,
    rating,
    description,
  }) => {
    return (
      <>
        <div className='grid grid-cols-1 gap-4 bg-white dark:bg-dark-2 my-3'>
          <div className='border dark:border-gray-5 p-4'>
            <CheckboxTwo />
            <div className="flex items-center justify-center mb-4">
              <Image src={logo} alt={bankName} width={200} height={200} />
            </div>
            <div className="flex justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  transform={{ size: 20 }}
                  className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <p className="text-center text-black dark:text-white">14 Reviews</p>
            <h1 className="text-xl font-bold my-5">
              <span className="px-2 text-blue">{title}</span>
            </h1>
            <p className='text-black dark:text-white'>{description}</p>
          </div>
        </div>
      </>
    );
}

export default BankCardTwo;