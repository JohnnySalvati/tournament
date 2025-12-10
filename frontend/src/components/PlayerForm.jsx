import { useState, useEffect } from "react";
import Button from "./Button";

export default function PlayerForm({ onSubmit, onCancel, initialData = {} }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rank, setRank] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setAge(initialData.age || "");
      setRank(initialData.rank || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, rank });
  };

  return (
    <form className="bg-white p-6 rounded-xl shadow-card space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Age</label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Rank</label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </div>
    </form>
  );
}
