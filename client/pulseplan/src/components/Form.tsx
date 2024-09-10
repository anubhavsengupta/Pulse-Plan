'use client'
import React, { useState } from 'react';

function Form({submitExercise}: any) {
  // State for form fields
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitExercise({
        name: exerciseName,
        reps: sets,
        sets: reps
      });
    // send data to parent component.

    setExerciseName('');
    setSets('');
    setReps('');
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:border-blue-300"
          placeholder="Enter exercise name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sets" className="block text-gray-700 font-medium mb-2">Sets</label>
        <input
          type="number"
          id="sets"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:border-blue-300"
          placeholder="Enter sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reps" className="block text-gray-700 font-medium mb-2">Reps</label>
        <input
          type="number"
          id="reps"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:border-blue-300"
          placeholder="Enter reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default Form;