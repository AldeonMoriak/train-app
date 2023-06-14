"use server";

import { addExercise } from "@/app/actions";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Radio from "@/components/Radio/Radio";

export default async function Page() {
  return (
    <form
      action={addExercise}
      className="h-full flex flex-col gap-2"
    >
    <h3 className="text-gray-600 text-center p-2 text-base font-semibold">New Exercise</h3>
      <Input label="name" />
      <div className="text-sm">Type</div>
      <Radio name="type" value="seconds" />
      <Radio name="type" value="reps" />
      <Input
        label="duration"
      />
      <div className="text-sm">Level</div>
      <Radio
        name="level"
        value="beginner"
      />
      <Radio
        name="level"
        value="intermediate"
      />
      <Radio
        name='level'
        value="advanced"
      />
      <Input
        textarea
        label="description"
      />
      <Button label="save" type="submit" />
    </form>
  );
}
