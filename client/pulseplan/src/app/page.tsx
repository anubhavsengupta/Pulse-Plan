"use client";
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import useAuth from '../middleware/useAuth';
import List from '@/components/List';

type Exercise = {
  name: string;
  reps: number;
  sets: number;
};

export default function Home() {

  const isLoggedIn = useAuth();

  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

  const handleDelete = (idx: any) => {
    console.log('deleting', idx);
  }

  const addExercise = (exercise: Exercise) => {
    setExerciseList(exerciseList => [...exerciseList, exercise]);
  }



  if (!isLoggedIn) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Pulse Plan
        </div>
        {isLoggedIn ? <h2>Hi there.</h2> : ""}
      </main>
    );
  } else {
    return (
      <>  
      <h1>Hi there.</h1>
      <Form submitExercise={addExercise}></Form>
      <List items={exerciseList} deleteItem={handleDelete}></List>
      </>
    )
  }
}
