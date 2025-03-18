export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">NCLC365</h1>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Tools</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Discover NoCode & LowCode Tools</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          365 handpicked NoCode & LowCode tools to simplify workflows and automate tasks.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Explore Tools
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white text-center p-3 mt-8">
        © 2025 NCLC365 - All Rights Reserved
      </footer>
    </div>
  );
}
