import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
        <Card title="Welcome to Home" description="This is a reusable card component on the Home page." />
      </main>
    </>
  );
}
