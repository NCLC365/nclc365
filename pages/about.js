import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <h1 className="text-3xl font-bold">About NCLC365</h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
          NCLC365 is dedicated to providing a comprehensive list of No Code & Low Code tools for individuals and businesses to streamline workflows.
        </p>
      </main>
      <Footer />
    </div>
  );
}
