import { BiCheck } from "react-icons/bi";

export default function Checkbox({
  label,
  onChange,
  checked = false
}: {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}) {
  return (
    <label
      className="relative w-fit flex items-center gap-2 cursor-pointer"
    >
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        name={label}
        className="hidden peer"
      />
      <div className="w-5 h-5 border-2 rounded bg-transparent peer-checked:bg-blue-400"></div>
      <BiCheck
        color="white"
        className="peer-checked:visible invisible absolute left-0.5"
      />
      <span className="text-sm first-letter:uppercase bg-white text-gray-700">{label}</span>
    </label>
  );
}
