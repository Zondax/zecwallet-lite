import React, { ChangeEvent } from 'react';
import cstyles from "./Common.module.css";

interface TextBoxProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const CustomPath: ({value, setValue, placeholder}: TextBoxProps) => JSX.Element = ({ value, setValue, placeholder }: TextBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
      <input
        className={[cstyles.inputbox].join(" ")}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`optional derivation path (${placeholder})`}
      />
  );
}

export default CustomPath;
