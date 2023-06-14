"use server";

import { supabase } from "@/lib/supabase";
import { TableName } from "@/types/global.type";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function addExercise(data: FormData) {
  const { error } = await supabase.from("exercises").insert({
    name: data.get("name"),
    type: data.get("type"),
    level: data.get("level"),
    duration: data.get("duration"),
    description: data.get("description"),
  });
  if (error) {
    throw error;
  }
  redirect("/exercises", RedirectType.push);
}

export async function addWorkout(payload: FormData) {
  const { error, data } = await supabase
    .from("workouts")
    .insert({
      name: payload.get("name"),
      level: payload.get("level"),
      description: payload.get("description"),
    })
    .select()
    .single();
  if (error) {
    throw error;
  }
  const exercises = payload.getAll("exercises");
  for (let ex_id of exercises) {
    const { error: junction_error } = await supabase
      .from("workout_exercise")
      .insert({
        exercise_id: ex_id,
        workout_id: (data as any).id,
      });
    if (junction_error) {
      throw junction_error;
    }
  }
  redirect("/workouts", RedirectType.push);
}

export async function getData(table: TableName) {
  let { data } = await supabase.from(table).select();
  return data;
}

export async function getEntityById(table: TableName, id: string) {
  let { data, error } = await supabase
    .from(table)
    .select()
    .eq("id", id)
    .single();
  return data;
}

export async function getWorkoutWithExercises(id: string) {
  let { data, error } = await supabase
    .from("workouts")
    .select("*, workout_exercise(exercise_id)")
    .eq("id", id)
    .single();
  const exercises_ids = (data as any)["workout_exercise"].map(
    (ex: any) => ex.exercise_id
  );
  let exercises = [];
  for (let ex_id of exercises_ids) {
    let { data: exercise } = await supabase
      .from("exercises")
      .select()
      .eq("id", ex_id)
      .single();
    exercises.push(exercise);
  }
  return { ...data, exercises };
}
