// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di Insightlya</h1>
      <p className="mb-6">Isi survei singkat dan dapatkan pulsa atau e-money!</p>
      <Link href="/survey">
        <a className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">Mulai Survei</a>
      </Link>
    </div>
  );
}
