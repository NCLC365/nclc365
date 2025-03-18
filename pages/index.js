import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>NCLC365 - No Code, Low Code Resources</title>
        <meta name="description" content="Discover 365 No Code & Low Code tools to simplify your work and life." />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 w-full p-6">
        <h1 className="text-3xl font-bold">Welcome to NCLC365</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Explore 365 hand-picked No Code & Low Code tools to simplify your workflow.
        </p>

        <a href="#" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </a>
      </main>

      <footer className="w-full p-4 text-center bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} NCLC365. All rights reserved.
      </footer>
    </div>
  );
}
