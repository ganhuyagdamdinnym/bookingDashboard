type Props = {
  label: string;
  value: string;
  helper?: string;
};

export function StatsCard({ label, value, helper }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
        {value}
      </p>
      {helper && <p className="mt-1 text-xs text-emerald-600">{helper}</p>}
    </div>
  );
}

