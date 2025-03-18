import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Tools() {
  const tools = [
    { title: 'Zapier', description: 'Automate workflows easily.' },
    { title: 'Bubble.io', description: 'Build web apps visually.' },
    { title: 'Airtable', description: 'Manage databases effortlessly.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">No Code & Low Code Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} title={tool.title} description={tool.description} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
