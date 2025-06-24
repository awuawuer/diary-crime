import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Crime Access Portal</h1>
      <Link
        href="/access-request"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Search Suspect & Request Access
      </Link>
    </main>
  );
}
