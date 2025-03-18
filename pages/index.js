export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="w-full bg-blue-600 text-white p-4 text-center text-2xl font-bold shadow-md">
        Welcome to NCLC365
      </header>
      
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">NoCode & LowCode Resources</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Explore 365 handpicked NoCode & LowCode tools to simplify your workflow, automate tasks, and boost productivity.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center p-3 mt-8">
        © 2025 NCLC365 - All Rights Reserved
      </footer>
    </div>
  );
}
