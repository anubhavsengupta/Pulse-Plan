import React from 'react'

interface Item {
    name: string;
    reps: number
    sets: number
  }
  
interface ListProps {
    items: Item[];
    deleteItem: (newItems: Item[]) => void;
}

function List({items, deleteItem } : ListProps) {

    const workoutList = items.map((item, index) => (
        <li key={index} className="flex justify-between items-center p-2">
          <span>{item.name}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ));
    
      const handleDelete = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1); // Remove the item
        deleteItem(newItems);
      };

  return (
    <div>
        <ul>
            {workoutList}
        </ul>

    </div>
  )
}

export default List