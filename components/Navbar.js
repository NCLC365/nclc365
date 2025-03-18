import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">NCLC365</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
