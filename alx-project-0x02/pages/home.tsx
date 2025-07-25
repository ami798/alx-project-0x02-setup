// pages/home.tsx
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Welcome to the Home Page!</h1>

      <Card
        title="Getting Started"
        content="This project demonstrates basic routing, components, and props in Next.js."
      />
      <Card
        title="Why Next.js?"
        content="Next.js offers server-side rendering, routing, and more — ideal for full-stack projects."
      />
      <Card
        title="Reusable Components"
        content="By building reusable components like this Card, we keep our code clean and efficient."
      />
    </div>
  );
}
