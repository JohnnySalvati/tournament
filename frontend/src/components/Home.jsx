import React, { useEffect, useState } from "react";
import { getPlayers, createPlayer, updatePlayer, deletePlayer } from "../services/playersService";
import Players from "./Players";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // carga inicial
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getPlayers()
      .then((data) => { if (mounted) setPlayers(Array.isArray(data) ? data : []); })
      .catch((err) => { console.error(err); setError("No se pudieron cargar players"); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      const newPlayer = await createPlayer({ name });
      // si el backend devuelve el objeto creado con id:
      setPlayers((prev) => [...prev, newPlayer]);
      setName("");
    } catch (err) {
      console.error(err);
      setError("Error creando player");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Home</h1>

      <form onSubmit={handleCreate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del player"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Crear Player</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Cargando...</p>}

      <Players players={players} />
    </div>
  );
}
