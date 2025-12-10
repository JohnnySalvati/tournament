// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-4 mt-8">
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TournamentApp. All rights reserved.
      </div>
    </footer>
  );
}
