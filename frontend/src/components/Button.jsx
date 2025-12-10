// src/components/Button.jsx
export default function Button({ children, onClick, variant = 'primary', size = 'md' }) {
  const base = "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}
