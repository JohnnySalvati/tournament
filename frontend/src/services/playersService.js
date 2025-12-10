import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";
const API_BASE = "http://127.0.0.1:8000/api";

const playersEndpoint = `${API_BASE}/players/`;

export async function getPlayers() {
  const resp = await axios.get(playersEndpoint);
  return resp.data;
}

export async function createPlayer(payload) {
  // payload por ejemplo: { name: "Juan" }
  const resp = await axios.post(playersEndpoint, payload);
  return resp.data;
}

export async function updatePlayer(id, payload) {
  // payload por ejemplo: { name: "Juan Actualizado" }
  const resp = await axios.put(`${playersEndpoint}${id}/`, payload);
  return resp.data;
}

export async function deletePlayer(id) {
  const resp = await axios.delete(`${playersEndpoint}${id}/`);
  return resp.data;
}