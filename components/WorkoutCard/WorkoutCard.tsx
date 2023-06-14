import { Workout } from "@/types/global.type";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className="relative">
      <div className="w-full h-28 brightness-75 rounded-sm bg-teal-500 flex items-end p-2"></div>
      <div className="text-lg text-white absolute bottom-1 left-1">
        {workout.name} - {workout.level}
      </div>
    </div>
  );
}
