export default function Success() {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-8">Thank You!</h1>
        <p className="text-lg mb-6">
          Your purchase was successful. Check your email for your Airtable access link.
        </p>
        <a href="/" className="text-teal-500">Back to Home</a>
      </div>
    );
  }