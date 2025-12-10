
const API_BASE = "http://localhost:8000/api";

export async function getPlayers() {
  const response = await fetch(`${API_BASE}/players/`);
  if (!response.ok) {
    throw new Error("Error al obtener jugadores");
  }
  return response.json();
}

export async function createPlayer(data) {
  const response = await fetch(`${API_BASE}/players/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al crear jugador");
  }

  return response.json();
}
