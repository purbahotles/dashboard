import React from "react";

interface InputGroupProps {
  customClasses?: string;
  value?: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = ({
  customClasses,
  label,
  type,
  placeholder,
  required,
  value
}) => {
  return (
    <>
      <div className={customClasses}>
        <p className="py-3 space-x-5 text-body-sm font-bold text-black dark:text-white">
          {label}
          {required && <span className="text-red"></span>}
        </p>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
    </>
  );
};

export default InputGroup;
