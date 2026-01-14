export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-900">
          Analytics
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          High‑level metrics and charts (placeholder for now).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-2xl border border-dashed border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold text-zinc-900">
            Revenue by service
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Replace this block with your chart library of choice.
          </p>
        </div>
        <div className="h-64 rounded-2xl border border-dashed border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold text-zinc-900">
            Bookings by weekday
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Another placeholder for analytics visualizations.
          </p>
        </div>
      </div>
    </div>
  );
}

