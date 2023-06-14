"use client";
import Select from "react-select";
export default function MySelect({
  options,
  multi = false,
  name,
  label,
}: {
  options: { value: string; label: string }[];
  multi?: boolean;
  name: string;
  label: string;
}) {
  return (
    <label>
      <span className="first-letter:uppercase mb-1 text-gray-900 text-sm ">{label}</span>
      <Select name={name} options={options} isMulti={multi} />
    </label>
  );
}
