﻿export async function getExercises(): Promise<any> {
    const res = await fetch(`http://localhost:5206/api/Exercise`, {
        next: { revalidate: 10 }
    });
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getExerciseByGymGoerId(id: { gymgoer: string }): Promise<any> {
    const res = await fetch(`http://localhost:5206/api/Exercise/GetExercisesByGymGoer/${id.gymgoer}`, {
        next: { revalidate: 10 }
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
}