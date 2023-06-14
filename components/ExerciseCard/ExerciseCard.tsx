import { Exercise } from "@/types/global.type";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className="h-14 flex gap-4">
      <div className="w-14 h-12 rounded-sm bg-teal-500"></div>
      <div className="flex flex-col justify-around">
        <div className="text-sm">{exercise.name}</div>
        <div>
          <span className="text-sm text-gray-500">{exercise.duration}</span>
          <span
            className={`text-xs font-light ${
              exercise.type === "reps" ? "ml-1" : ""
            }`}
          >
            {exercise.type === "reps" ? "reps" : '"'}
          </span>
        </div>
      </div>
    </div>
  );
}
