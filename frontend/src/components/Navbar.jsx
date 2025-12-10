// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">TournamentApp</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/players" className="hover:text-primary transition">Players</a>
          <a href="/tournaments" className="hover:text-primary transition">Tournaments</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="material-icons">menu</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 bg-white shadow">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/players" className="hover:text-primary transition">Players</a>
          <a href="/tournaments" className="hover:text-primary transition">Tournaments</a>
        </div>
      )}
    </nav>
  );
}
