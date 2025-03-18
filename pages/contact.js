import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">Reach out to us at <strong>support@nclc365.com</strong></p>
      </main>
      <Footer />
    </div>
  );
}
