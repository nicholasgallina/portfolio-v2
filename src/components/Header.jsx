export default function Header({ className }) {
  return (
    <div className={`bg-red-600 bg-opacity-70 text-white p-4 ${className}`}>
      <h1 className="text-2xl font-bold">My Portfolio</h1>
    </div>
  );
}