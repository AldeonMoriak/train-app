"use client";
import { Exercise } from "@/types/global.type";
import Input from "../Input/Input";
import { Fragment, useState } from "react";
import Button from "../Button/Button";

export default function SelectExercise({
  exercises,
}: {
  exercises: Exercise[];
}) {
  const [count, setCount] = useState(1);
  return (
    <div className="w-full flex flex-col gap-3">
      {[...Array(count)].map((index) => (
        <div key={index} className="w-full flex gap-2">
          <select
            name="exercise"
            className="rounded text-sm text-gray-900 px-2 block border-2 w-full h-10"
          >
            <option value={""}>Select an exercise</option>
            {exercises.map((exercise) => (
              <option value={exercise.id} key={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
          <Input label="rest" />
        </div>
      ))}
      <div className="flex justify-center w-full">
        <Button onClick={() => setCount((prev) => prev + 1)} label="Add Exercise Set" />
      </div>
    </div>
  );
}
