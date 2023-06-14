import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Button({
  label,
  href,
  onClick,
  type = "button",
  fab = false,
}: {
  label?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fab?: boolean;
}) {
  return href ? (
    fab ? (
      <Link
        title="New Workout"
        className="drop-shadow-md fixed bottom-24 right-4 z-30 rounded-full bg-teal-500 p-3"
        href={href}
      >
        <BiPlus color="white" />
      </Link>
    ) : (
      <Link
        href={href}
        className="rounded text-white bg-teal-500 px-3 py-1 mt-3 text-sm"
      >
        {label}
      </Link>
    )
  ) : (
    <button
      className="rounded text-white bg-teal-500 px-3 py-1 mt-3 text-sm"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
