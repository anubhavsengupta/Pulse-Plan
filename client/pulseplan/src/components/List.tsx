import React from 'react'

type Exercise = {
  userId: string,
  exerciseId: number,
  name: string;
  reps: number;
  sets: number;
};
  
interface ListProps {
    items: Exercise[];
    deleteItem: (newItems: number) => void;
}

function List({ items, deleteItem }: ListProps) {
    const workoutList = items.map((item, index) => (
      <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg mb-2 shadow-sm">
        <span className="font-medium">{item.name}</span>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
          onClick={() => handleDelete(item.exerciseId)}
        >
          Delete
        </button>
      </li>
    ));

    const handleDelete = (index: number) => {
      deleteItem(index);
    };

    return (
      <div className="w-full max-w-md mx-auto">
        <ul className="space-y-2">{workoutList}</ul>
      </div>
    );
}

export default List