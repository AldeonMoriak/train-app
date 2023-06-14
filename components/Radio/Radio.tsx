import {
  BiCheck,
  BiCheckCircle,
  BiCircle,
  BiCircleHalf,
  BiRadioCircle,
  BiRadioCircleMarked,
} from "react-icons/bi";

export default function Radio({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) {
  return (
    <label
      className="relative w-fit flex items-center gap-2 cursor-pointer"
    >
      <input type="radio" name={name} value={value} className="opacity-0 absolute peer" />
      <div className="w-5 peer-focus:outline-2 peer-focus:outline h-5 border-2 rounded-full"></div>
      <BiRadioCircleMarked
        size={20}
        color="rgb(96 165 250)"
        className="peer-checked:visible invisible absolute left-0"
      />
      <span className="text-sm first-letter:uppercase bg-white text-gray-700">
        {value}
      </span>
    </label>
  );
}
