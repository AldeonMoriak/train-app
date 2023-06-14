import { Workout } from "@/types/global.type";

export function getDuration(workout: Workout) {
  let duration = 0;
  for (let exercise of workout.exercises) {
    if (exercise.type === "reps") duration += exercise.duration * 4;
    else duration += exercise.duration;
  }
  return duration;
}

export function getDurationFormat(seconds: number) {
  const mins = Math.round(seconds / 60);
  return mins;
}
