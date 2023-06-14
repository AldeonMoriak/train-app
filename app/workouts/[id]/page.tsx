import { getEntityById, getWorkoutWithExercises } from "@/app/actions";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import { getDuration, getDurationFormat } from "@/lib/utils";
import { Workout } from "@/types/global.type";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const workout = (await getWorkoutWithExercises(params.id)) as Workout;
  return (
    <div className="block">
      <div className="h-36 w-full px-2 pb-1 bg-teal-500 flex justify-between items-end">
        <div className="text-gray-200 text-xl">{workout.name}</div>
        <div>
          <span className="text-sm text-gray-200">
            {getDurationFormat(getDuration(workout))}
          </span>
          <span className="text-xs font-light text-gray-200 ml-1">min</span>
        </div>
      </div>
      <div className="w-full p-2">
        <div className="whitespace-pre-line text-sm text-gray-600">
          {workout.description}
        </div>
      </div>
      <div className="w-full p-2">
        <div className="text-base text-gray-900 mb-2">Exercises</div>
        {workout.exercises.map((ex) => (
          <Link href={`/exercises/${ex.id}`} key={ex.id}>
            <ExerciseCard exercise={ex} />
          </Link>
        ))}
      </div>
    </div>
  );
}
