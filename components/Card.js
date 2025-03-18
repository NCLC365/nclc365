export default function Card({ title, description }) {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
