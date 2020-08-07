import React from "react";
import TextareaProps from "./interfaces";
import "./styles.css";

const Textarea = (props: TextareaProps) => {
  const { label, name, ...rest } = props;

  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;
