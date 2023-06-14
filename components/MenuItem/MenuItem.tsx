"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiAlarm, BiCalendar, BiCycling } from "react-icons/bi";

const icons = {
  BiAlarm: <BiAlarm size={20} />,
  BiCalendar: <BiCalendar size={20} />,
  BiCycling: <BiCycling size={20} />,
};
export default function MenuItem({
  title,
  Icon,
  to,
}: {
  title: string;
  Icon: "BiAlarm" | "BiCalendar" | "BiCycling";
  to: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={`flex flex-1 flex-col items-center ${
        to !== "/"
          ? pathname.includes(to)
            ? "opacity-100"
            : "opacity-50 "
          : pathname === to
          ? "opacity-100"
          : "opacity-50 "
      }`}
    >
      {icons[Icon]}
      <div className="text-sm">{title}</div>
    </Link>
  );
}
