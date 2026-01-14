export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 pb-12">
      {/* --- Page Header --- */}
      <div className="border-b border-zinc-800/50 pb-6 px-2">
        <h1 className="text-2xl font-black tracking-tight text-white">
          Settings
        </h1>
        <p className="mt-1 text-xs text-zinc-500">
          Захиалгын системийн үндсэн тохиргоо болон ерөнхий мэдээлэл.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* --- General Configuration Section --- */}
        <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            Ерөнхий тохиргоо
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                Бизнесийн нэр
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-zinc-800 bg-[#09090b] px-4 py-2.5 text-sm text-zinc-200 transition focus:border-blue-600/50 focus:outline-none focus:ring-4 focus:ring-blue-600/5"
                defaultValue="Booking Demo"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                Цагийн бүс
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-zinc-800 bg-[#09090b] px-4 py-2.5 text-sm text-zinc-200 transition focus:border-blue-600/50 focus:outline-none focus:ring-4 focus:ring-blue-600/5">
                  <option>Asia/Ulaanbaatar (GMT+08:00)</option>
                  <option>UTC (GMT+00:00)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-600">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="rounded-xl bg-white px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-200 shadow-lg shadow-white/5"
              >
                Өөрчлөлтийг хадгалах
              </button>
            </div>
          </div>
        </div>

        {/* --- Account Danger Zone (Optional Placeholder) --- */}
        <div className="rounded-2xl border border-red-900/10 bg-red-900/[0.02] p-8">
          <h2 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/60">
            Аюулгүй байдал
          </h2>
          <p className="text-xs text-zinc-600 mb-4">
            Системийг бүхэлд нь устгах эсвэл өгөгдлийг цэвэрлэх үйлдэл.
          </p>
          <button className="text-xs font-bold text-red-900 hover:text-red-500 transition">
            Өгөгдөл устгах...
          </button>
        </div>
      </div>
    </div>
  );
}
