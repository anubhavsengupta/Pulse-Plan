"use client";
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import useAuth from '../middleware/useAuth';
import List from '@/components/List';
import { useRouter } from 'next/navigation'
type Exercise = {
  userId: string,
  exerciseId: number,
  name: string;
  reps: number;
  sets: number;
};

export default function Home() {

  const isLoggedIn = useAuth();
  const router = useRouter();
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  // fetch exercise list from backend server

  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        router.push('/login');
      }
    }
  }, []);
  useEffect(() => {
    console.log("Fetch exercise list from backend server", isLoggedIn);
      const getExerciseList = async () => {
        const res = await fetch("http://localhost:8080/api/v1/exercises");
        const data: Exercise[] = await res.json(); // Wait for the JSON to resolve
        setExerciseList(data);
      };
      getExerciseList();

      

  }, []);

  const handleDelete = (idx: any) => {
    console.log('deleting', idx);
    // setExerciseList(exerciseList.map(item => {

    // })
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
      <div className="flex justify-center items-center min-h-screen space-x-4">
        <Form submitExercise={addExercise}></Form>
        <List items={exerciseList} deleteItem={handleDelete}></List>
      </div>

      </>
    )
  }
}
