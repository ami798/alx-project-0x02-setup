// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 bg-blue-800 text-white shadow-md">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="text-lg font-semibold hover:underline">
          Home
        </Link>
        <Link href="/home" className="text-lg font-semibold hover:underline">
          Page Home
        </Link>
        <Link href="/about" className="text-lg font-semibold hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
