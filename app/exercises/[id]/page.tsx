import { getEntityById } from "@/app/actions";
import { Exercise } from "@/types/global.type";

export default async function Page({ params }: { params: { id: string } }) {
  const exercise = (await getEntityById('exercises', params.id)) as Exercise;
  return (
    <div className="block">
      <div className="h-36 w-full px-2 pb-1 bg-teal-500 flex justify-between items-end">
        <div className="text-gray-200 text-xl">{exercise.name}</div>
        <div>
          <span className="text-sm text-gray-200">{exercise.duration}</span>
          <span
            className={`text-xs font-light text-gray-200 ${
              exercise.type === "reps" ? "ml-1" : ""
            }`}
          >
            {exercise.type === "reps" ? "reps" : '"'}
          </span>
        </div>
      </div>
      <div className="w-full p-2">
        <div className="whitespace-pre-line text-sm text-gray-600">{exercise.description}</div>
      </div>
    </div>
  );
}
