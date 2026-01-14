import Link from "next/link";
import { services } from "../../lib/data";
import { Table } from "../../components/admin/Table";

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      {/* --- Page Header --- */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Services
          </h1>
          <p className="mt-1 text-xs text-zinc-500">
            Нийт {services.length} төрлийн үйлчилгээ бүртгэгдсэн байна.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-zinc-200">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Шинэ үйлчилгээ
        </button>
      </div>

      {/* --- Services Table --- */}
      <div className="rounded-2xl px-2 border border-zinc-800/40 bg-zinc-900/10 overflow-hidden backdrop-blur-sm">
        <Table
          columns={[
            {
              key: "name",
              header: "Үйлчилгээний нэр",
              render: (row) => (
                <div className="py-1">
                  <Link
                    href={`/services/${row.id}`}
                    className="text-sm font-bold text-zinc-200 hover:text-blue-500 transition-colors"
                  >
                    {row.name}
                  </Link>
                  <div className="text-[10px] text-zinc-600 font-mono mt-0.5">
                    ID: {row.id}
                  </div>
                </div>
              ),
            },
            {
              key: "category",
              header: "Төрөл",
              render: (row) => (
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="h-1 w-1 rounded-full bg-zinc-700" />
                  {row.category}
                </span>
              ),
            },
            {
              key: "durationMinutes",
              header: "Хугацаа",
              render: (row) => (
                <span className="text-xs font-medium text-zinc-500">
                  {row.durationMinutes} мин
                </span>
              ),
            },
            {
              key: "priceMnt",
              header: "Үнэ",
              render: (row) => (
                <span className="text-sm font-black text-zinc-200">
                  ₮{row.priceMnt.toLocaleString()}
                </span>
              ),
            },
            {
              key: "active",
              header: "Төлөв",
              render: (row) => (
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    row.active
                      ? "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20"
                      : "bg-zinc-800 text-zinc-500 ring-1 ring-zinc-700"
                  }`}
                >
                  {row.active ? "Active" : "Inactive"}
                </span>
              ),
            },
            {
              key: "actions",
              header: "",
              render: (row) => (
                <div className="flex justify-end pr-2">
                  <button className="text-zinc-600 hover:text-white transition">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              ),
            },
          ]}
          rows={services}
          getKey={(row) => row.id}
        />
      </div>
    </div>
  );
}
