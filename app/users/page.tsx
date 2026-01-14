import { users } from "../../lib/data";
import { Table } from "../../components/admin/Table";

export default function UsersPage() {
  const roleStyles = {
    admin: "bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20",
    staff: "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20",
    viewer: "bg-zinc-800 text-zinc-500 ring-1 ring-zinc-700",
  };

  return (
    <div className="space-y-6">
      {/* --- Page Header --- */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Users
          </h1>
          <p className="mt-1 text-xs text-zinc-500">
            Системд нэвтрэх эрх бүхий нийт {users.length} багийн гишүүн байна.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-600/10">
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
          Гишүүн нэмэх
        </button>
      </div>

      {/* --- Users Table --- */}
      <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 overflow-hidden backdrop-blur-sm">
        <Table
          columns={[
            {
              key: "name",
              header: "Хэрэглэгч",
              render: (row) => (
                <div className="flex items-center gap-3 py-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 text-[10px] font-bold text-zinc-300">
                    {row.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-200">
                      {row.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      ID: {row.id}
                    </span>
                  </div>
                </div>
              ),
            },
            {
              key: "email",
              header: "Имэйл хаяг",
              render: (row) => (
                <span className="text-xs text-zinc-400 font-medium">
                  {row.email}
                </span>
              ),
            },
            {
              key: "role",
              header: "Эрх",
              render: (row) => (
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    roleStyles[row.role] || roleStyles.viewer
                  }`}
                >
                  {row.role}
                </span>
              ),
            },
            {
              key: "createdAt",
              header: "Үүсгэсэн огноо",
              render: (row) => (
                <span className="text-xs text-zinc-500">{row.createdAt}</span>
              ),
            },
            {
              key: "actions",
              header: "",
              render: (row) => (
                <div className="flex justify-end pr-2">
                  <button className="rounded-md p-1.5 text-zinc-600 hover:bg-zinc-800 hover:text-white transition">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              ),
            },
          ]}
          rows={users}
          getKey={(row) => row.id}
        />
      </div>
    </div>
  );
}
