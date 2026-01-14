export function Header() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-[#09090b]/80 px-4 backdrop-blur-md sm:px-8">
      {/* Page Context */}
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-bold tracking-tight text-white">
          Dashboard
        </h2>
        <span className="hidden h-4 w-[1px] bg-zinc-800 sm:block" />
        <span className="hidden text-xs font-medium text-zinc-500 sm:block">
          Үндсэн хяналт
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Search / Notifications Placeholder (Optionally) */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5 border border-zinc-800">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              {today}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 border-l border-zinc-800 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white leading-none">Админ</p>
            <p className="text-[10px] text-zinc-500 mt-1">Системийн эрхтэй</p>
          </div>

          {/* Avatar with Ring */}
          <button className="group relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 ring-2 ring-zinc-800 transition-all hover:ring-blue-600">
            <span className="text-xs font-bold text-zinc-200">A</span>
            {/* Online indicator badge */}
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#09090b] bg-emerald-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
