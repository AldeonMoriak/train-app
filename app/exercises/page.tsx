import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import { Exercise } from "@/types/global.type";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { getData } from "../actions";
import Button from "@/components/Button/Button";

export const revalidate = 0;
export default async function Page() {
  const exercises = (await getData("exercises")) as Exercise[];
  return (
    <>
      {exercises && exercises.length ? (
        <div className="">
          {exercises.map((exercise) => (
            <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </Link>
          ))}
        </div>
      ) : (
        <>
          <div className="h-full flex flex-col justify-center items-center">
            <div>No exercises yet.</div>
          </div>
        </>
      )}
      <Button fab href="/exercises/new" />
    </>
  );
}
