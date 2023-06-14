import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import { Workout } from "@/types/global.type";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { getData } from "../actions";
import Button from "@/components/Button/Button";

export const revalidate = 0;
export default async function Page() {
  const workouts = (await getData("workouts")) as Workout[];
  return (
    <>
      {workouts && workouts.length ? (
        <div className="flex flex-col items-center gap-4">
          {workouts.map((workout) => (
            <Link
              href={`/workouts/${workout.id}`}
              key={workout.id}
              className="w-full"
            >
              <WorkoutCard workout={workout} />
            </Link>
          ))}
        </div>
      ) : (
        <>
          <div className="h-full flex flex-col justify-center items-center">
            <div>No workouts yet.</div>
          </div>
        </>
      )}
      <Button fab href="/workouts/new" />
    </>
  );
}
