import { addWorkout, getData } from "@/app/actions";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Plan from "@/components/Plan/Plan";
import Radio from "@/components/Radio/Radio";
import SelectExercise from "@/components/SelectExercise/SelectExercise";
import { Workout } from "@/types/global.type";

export default async function Page() {
  const workouts = (await getData("workouts")) as Workout[];
  return (
    <form action={addWorkout} className="h-full flex flex-col gap-2">
      <h3 className="text-gray-600 text-center p-2 text-base font-semibold">
      New Plan
      </h3>
      <Plan workouts={workouts} />
      <div className="text-sm">Exercise Set</div>
      <Button label="save" type="submit" />
    </form>
  );
}