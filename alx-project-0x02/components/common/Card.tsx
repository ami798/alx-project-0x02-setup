// components/common/Card.tsx
import { type CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
