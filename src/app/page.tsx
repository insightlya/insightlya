// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-xl rounded-2xl shadow-lg bg-white p-10 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Selamat Datang di Insightlya</h1>
        <p className="text-gray-700 mb-6">
          Isi survei singkat dan dapatkan <strong>pulsa</strong> atau <strong>e-money</strong>!
        </p>
        <a
          href="https://forms.gle/xyz123" // GANTI DENGAN LINK FORM ASLI
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Mulai Survei
        </a>
      </div>
    </main>
  );
}
