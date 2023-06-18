import { Workout } from "@/types/global.type";

export function getDuration(workout: Workout) {
  let duration = 0;
  for (let i = 0; i < workout.exercises.length; i++) {
    const exercise = workout.exercises[i];
    const rest = workout.rests[i];
    if (exercise.type === "reps") duration += exercise.duration * 4;
    else duration += exercise.duration;
    duration += rest;
  }
  return duration;
}

export function getDurationFormat(seconds: number) {
  const mins = Math.round(seconds / 60);
  return mins;
}
