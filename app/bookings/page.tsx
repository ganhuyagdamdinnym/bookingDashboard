import Link from "next/link";
import { bookings } from "../../lib/data";
import { Table } from "../../components/admin/Table";

export default function BookingsPage() {
  const statusStyles = {
    confirmed: "bg-emerald-500/10 text-emerald-500 ring-emerald-500/20",
    completed: "bg-blue-500/10 text-blue-500 ring-blue-500/20",
    pending: "bg-amber-500/10 text-amber-500 ring-amber-500/20",
    canceled: "bg-red-500/10 text-red-500 ring-red-500/20",
  };

  return (
    <div className="space-y-8">
      {/* Page Title & Stats Bar */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800 pb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Bookings
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Нийт {bookings.length} захиалга бүртгэгдсэн байна.
          </p>
        </div>

        {/* Quick Filter Buttons (Optional but stylish) */}
        <div className="flex gap-2">
          {["All", "Confirmed", "Pending"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white transition"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Container */}
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-4 backdrop-blur-sm overflow-hidden">
        <Table
          columns={[
            {
              key: "id",
              header: "ID",
              render: (row) => (
                <Link
                  href={`/bookings/${row.id}`}
                  className="font-mono text-[11px] font-bold text-zinc-500 hover:text-blue-500 transition"
                >
                  #{row.id.toUpperCase()}
                </Link>
              ),
            },
            {
              key: "customerName",
              header: "Үйлчлүүлэгч",
              render: (row) => (
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-200">
                    {row.customerName}
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    {row.email || "no-email"}
                  </span>
                </div>
              ),
            },
            {
              key: "serviceName",
              header: "Үйлчилгээ",
              render: (row) => (
                <span className="text-zinc-400 font-medium">
                  {row.serviceName}
                </span>
              ),
            },
            {
              key: "date",
              header: "Цаг хугацаа",
              render: (row) => (
                <div className="flex flex-col text-xs">
                  <span className="text-zinc-300">{row.date}</span>
                  <span className="text-zinc-600 font-mono text-[10px]">
                    {row.time}
                  </span>
                </div>
              ),
            },
            {
              key: "amountMnt",
              header: "Төлбөр",
              render: (row) => (
                <span className="font-black text-zinc-200">
                  ₮{row.amountMnt.toLocaleString()}
                </span>
              ),
            },
            {
              key: "status",
              header: "Төлөв",
              render: (row) => (
                <span
                  className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${
                    statusStyles[row.status as keyof typeof statusStyles] ||
                    statusStyles.pending
                  }`}
                >
                  {row.status}
                </span>
              ),
            },
            {
              key: "action",
              header: "",
              render: (row) => (
                <Link
                  href={`/bookings/${row.id}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ),
            },
          ]}
          rows={bookings}
          getKey={(row) => row.id}
        />
      </div>
    </div>
  );
}
