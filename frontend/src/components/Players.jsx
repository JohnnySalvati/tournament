import React from "react";

export default function Players({ players }) {
  // players: array de objetos { id, name, ... }
  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
