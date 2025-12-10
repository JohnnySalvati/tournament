// src/api.js
import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Django dev server

export const fetchPlayers = async () => {
  const resp = await axios.get(`${API_URL}/players/`);
  return resp.data;
};

export const createPlayer = async (player) => {
  const resp = await axios.post(`${API_URL}/players/`, player);
  return resp.data;
};

export const updatePlayer = async (id, player) => {
  const resp = await axios.put(`${API_URL}/players/${id}/`, player);
  return resp.data;
};

export const deletePlayer = async (id) => {
  await axios.delete(`${API_URL}/players/${id}/`);
};
