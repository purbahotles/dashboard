import React from "react";
import InputGroup from "@/components/FormElements/InputGroup";

interface InputGroupProps {
  customClasses?: string;
  value?: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputText: React.FC<InputGroupProps> = ({
  customClasses,
  label,
  type,
  placeholder,
  required,
  value
}) => {
  return (
    <>
     <span className="flex items-center space-x-5">
        <p className="text-body-sm w-50 font-bold text-black dark:text-white">
          {label}
        </p>
        <InputGroup
          label=""
          type={type}
          placeholder={placeholder}
          customClasses={customClasses}
          required={required}
          value={value}
        />
      </span>
    </>
  );
};

export default InputText;