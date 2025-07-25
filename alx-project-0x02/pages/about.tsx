import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">About Page</h2>
        <Button onClick={() => alert("Button clicked!")}>Learn More</Button>
      </main>
    </>
  );
}
