import React from "react";
import SelectProps from "./interfaces";
import "./styles.css";

const Select = (props: SelectProps) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecionar opção
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
