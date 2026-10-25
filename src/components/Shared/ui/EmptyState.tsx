import Link from "next/link";

type Props = { code?: string; title: string; message: string };

export default function EmptyState({ code, title, message }: Props) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
      {code && <p className="text-6xl font-bold text-red-700">{code}</p>}
      <h1 className="mt-3 text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600">{message}</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-700 px-5 py-2.5 font-semibold text-white shadow-md hover:bg-green-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
