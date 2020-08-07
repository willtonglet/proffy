import React from "react";
import InputProps from "./interfaces";
import "./styles.css";

const Input = (props: InputProps) => {
  const { label, name, ...rest } = props;

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
