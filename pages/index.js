import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto text-center py-16 px-4">
      {/* Hero Section */}
      <motion.h1 
        className="text-5xl font-heading font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        NoCode & LowCode Tools for 365 Days!
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover the best tools to simplify your workflow.
      </motion.p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/explore">
          <button className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all">
            Explore Tools
          </button>
        </Link>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <FeatureCard title="AI-Powered Sorting" description="Organize event photos with AI." />
        <FeatureCard title="Marketing Automation" description="Automate social media & email campaigns." />
        <FeatureCard title="No-Code Integrations" description="Connect apps with zero coding." />
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition hover:scale-105"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}
