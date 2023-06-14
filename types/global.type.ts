export type TableName = 'exercises' | 'workouts' | 'workout_exercise';
export type Nullable<T> = null | T;
export type Exercise = {
  name: string;
  id: string;
  type: Nullable<Type>;
  duration: number;
  level: Nullable<Level>;
  description: string;
};
export type Workout = {
  name: string;
  id: string;
  duration: number;
  level: Nullable<Level>;
  description: string;
  exercises: Exercise[];
};

export type Level = "beginner" | "intermediate" | "advanced";

export type Type = "reps" | "seconds";