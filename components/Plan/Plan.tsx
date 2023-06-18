"use client";
import { Nullable, Workout } from "@/types/global.type";
import Input from "../Input/Input";
import { useState } from "react";

export default function Plan({ workouts }: { workouts: Workout[] }) {
  const [days, setDays] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<Nullable<number>>(null)
  return (
    <>
      <Input label="name" />
      <Input
        label="days"
        value={days}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = parseInt(e.target.value);
          setDays(value);
        }}
      />
      <Input type="date" label="start Date" />
      <div className="flex gap-2 overflow-x-auto p-2">
        {[...Array(days)].map((_, index) => {
          return (
            <div
              className={`${
                index === selectedIndex
                  ? "text-white bg-green-500"
                  : "outline outline-1 outline-green-500 text-gray-900"
              } cursor-pointer px-3 py-1 rounded-full w-8 h-8 flex justify-center items-center`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
}
