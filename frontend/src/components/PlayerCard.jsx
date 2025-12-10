// PlayerCard.jsx
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";  
import Button from "./Button";

export default function PlayerCard({ player, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-cardHover transition-shadow duration-300 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
        <p className="text-gray-600">Age: {player.age}</p>
        <p className="text-gray-600">Rank: {player.rank}</p>
      </div>
      <div className="flex space-x-3 mt-4">
        <Button variant="secondary" size="sm" onClick={() => onEdit(player)}>
          <PencilIcon className="w-4 h-4 mr-1" />
        </Button>
        <Button variant="primary" size="sm" onClick={() => onDelete(player.id)}>
          <TrashIcon className="w-4 h-4 mr-1" />
        </Button>
      </div>
    </div>
  );
}
