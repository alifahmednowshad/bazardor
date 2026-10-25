export default function ProductsSkeleton() {
  return (
    <div className="py-6" aria-busy="true" aria-label="লোড হচ্ছে">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 animate-pulse rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
              </div>
              <div className="h-6 w-14 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
