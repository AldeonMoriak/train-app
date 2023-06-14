"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BiAlarm, BiCalendar, BiCycling } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

function MenuItem({
  title,
  Icon,
  to,
}: {
  title: string;
  Icon: IconType;
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
      <Icon size={20} />
      <div className="text-sm">{title}</div>
    </Link>
  );
}
export const metadata = {
  title: "Train App",
  description: "Make the training app you always wanted",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className="h-[calc(100vh_-_5rem)] max-w-2xl mx-auto overflow-y-auto p-2 relative"
        >
          {children}
        </main>
        <nav className="flex fixed bg-white drop-shadow w-full h-20 justify-around items-center border-t border-t-gray-300">
          <MenuItem to="/exercises" title="Exercises" Icon={BiCycling} />
          <MenuItem to="/" title="Plan" Icon={BiCalendar} />
          <MenuItem to="/workouts" title="Workouts" Icon={BiAlarm} />
        </nav>
      </body>
    </html>
  );
}
