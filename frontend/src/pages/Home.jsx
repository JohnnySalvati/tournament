import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PlayerCard from "../components/PlayerCard";
import PlayerForm from "../components/PlayerForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import { fetchPlayers, createPlayer, updatePlayer, deletePlayer } from "../api";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const loadPlayers = async () => {
    setLoading(true);
    const data = await fetchPlayers();
    setPlayers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleCreate = async (player) => {
    await createPlayer(player);
    setShowForm(false);
    loadPlayers();
  };

  const handleUpdate = async (player) => {
    await updatePlayer(editingPlayer.id, player);
    setEditingPlayer(null);
    setShowForm(false);
    loadPlayers();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this player?")) {
      await deletePlayer(id);
      loadPlayers();
    }
  };

  const handleEditClick = (player) => {
    setEditingPlayer(player);
    setShowForm(true);
  };

  const handleAddClick = () => {
    setEditingPlayer(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingPlayer(null);
    setShowForm(false);
  };

  return (

    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 font-heading">Players</h1>
        <Button variant="primary" size="md" onClick={handleAddClick}>
          <PlusIcon className="w-5 h-5 mr-2" /> 
        </Button>
      </div>

      {showForm && (
        <div className="mb-6">
          <PlayerForm
            onSubmit={editingPlayer ? handleUpdate : handleCreate}
            onCancel={handleCancel}
            initialData={editingPlayer}
          />
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {players.map(player => (
            <PlayerCard
              key={player.id}
              player={player}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </MainLayout>
  );
}