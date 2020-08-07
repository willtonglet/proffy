import { TextareaHTMLAttributes } from "react";

export default interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
