import Container from "@/components/Shared/ui/Container";

export default function Loading() {
  return (
    <main className="py-6" aria-busy="true" aria-label="লোড হচ্ছে">
      <Container>
        <div className="mb-5 h-5 w-56 animate-pulse rounded bg-gray-200" />

        {/* সারাংশ কার্ড */}
        <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 animate-pulse rounded-2xl bg-gray-200" />
            <div className="space-y-3">
              <div className="h-8 w-56 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
          <div className="h-32 w-40 animate-pulse rounded-xl bg-gray-200" />
        </div>

        {/* দামের সারসংক্ষেপ */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
          <div className="mt-8 h-6 w-56 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-72 animate-pulse rounded-xl bg-gray-200" />
        </div>
      </Container>
    </main>
  );
}
