import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <h1 className="text-3xl font-bold text-blue-600">Welcome to ALX Project 0x02</h1>
    </div>
  );
}
