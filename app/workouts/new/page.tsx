import { addWorkout, getData } from "@/app/actions";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Radio from "@/components/Radio/Radio";
import MySelect from "@/components/Select/Select";
import { Exercise } from "@/types/global.type";

export default async function Page() {
  const exercises = ((await getData("exercises")) as Exercise[]).map((ex) => ({
    value: ex.id,
    label: ex.name,
  }));
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <form
      action={addWorkout}
      className="h-full flex flex-col gap-2"
    >
      <h3 className="text-gray-600 text-center p-2 text-base font-semibold">
        New Workout
      </h3>
      <Input label="name" />
      <MySelect label="Exercises" options={exercises} multi name="exercises" />
      <div className="text-sm">Level</div>
      <Radio name="level" value="beginner" />
      <Radio name="level" value="intermediate" />
      <Radio name="level" value="advanced" />
      <Input textarea label="description" />
      <Button label="save" type="submit" />
    </form>
  );
}
