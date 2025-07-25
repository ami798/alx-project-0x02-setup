// components/layout/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">My Site</h1>
      <nav className="space-x-6">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/posts" className="hover:text-gray-300">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
