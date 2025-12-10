const API_BASE = "http://localhost:8000/api";

export async function getBets() {
  const response = await fetch(`${API_BASE}/bets/`);
  if (!response.ok) throw new Error("Error al obtener apuestas");
  return response.json();
}

export async function createBet(data) {
  const response = await fetch(`${API_BASE}/bets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Error al crear apuesta");
  return response.json();
}
