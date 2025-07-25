// pages/about.tsx
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </div>
  );
}
