import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">NCLC365</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">about</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/features" className="hover:text-gray-300">features</Link>
            <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
            <Link href="/signup" className="hover:text-gray-300">Signup</Link>
            <Link href="/tools" className="hover:text-gray-300">tools</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>© 2025 NCLC365. All rights reserved.</p>
      </footer>
    </div>
  );
}
