import { SelectHTMLAttributes } from "react";

export default interface InputProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
