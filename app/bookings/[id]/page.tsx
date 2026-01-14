import { notFound } from "next/navigation";
import { getBookingById } from "../../../lib/data";

export default async function BookingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const booking = getBookingById(id);
  if (!booking) return notFound();

  const statusStyles = {
    confirmed: "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20",
    completed: "bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20",
    pending: "bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20",
    cancelled: "bg-red-500/10 text-red-500 ring-1 ring-red-500/20",
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12">
      {/* --- Page Header --- */}
      <div className="flex flex-col gap-6 border-b border-zinc-800/50 pb-6 lg:flex-row lg:items-center lg:justify-between px-2">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight text-white">
              #{booking.id.toUpperCase()}
            </h1>
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                statusStyles[booking.status]
              }`}
            >
              {booking.status}
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500 font-medium">
            Системд бүртгэгдсэн дэлгэрэнгүй мэдээлэл.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-bold text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200">
            Цуцлах
          </button>
          <button className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-zinc-200">
            Төлөв өөрчлөх
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* --- Left Column: Details --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-6 backdrop-blur-sm">
            <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Үйлчлүүлэгчийн мэдээлэл
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-zinc-500">
                  Үйлчлүүлэгч
                </p>
                <p className="text-base font-bold text-white leading-tight">
                  {booking.customerName}
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  {booking.email || "mail@example.com"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-zinc-500">
                  Үйлчилгээ
                </p>
                <p className="text-base font-bold text-white">
                  {booking.serviceName}
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-zinc-800/30">
                <p className="text-[10px] font-bold uppercase text-zinc-500">
                  Хугацаа
                </p>
                <p className="text-sm font-semibold text-zinc-300">
                  {booking.date} <span className="mx-1 text-zinc-700">/</span>{" "}
                  {booking.time}
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-zinc-800/30">
                <p className="text-[10px] font-bold uppercase text-zinc-500">
                  Нийт төлбөр
                </p>
                <p className="text-xl font-black text-blue-500">
                  ₮{booking.amountMnt.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Activity Timeline - Shorter Padding */}
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/5 p-6">
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Лог түүх
            </h2>
            <div className="relative space-y-5 pl-5">
              <div className="absolute left-[6.5px] top-1.5 h-[calc(100%-12px)] w-[1px] bg-zinc-800/60" />
              <div className="relative">
                <div className="absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border-2 border-[#09090b] bg-emerald-500" />
                <p className="text-xs font-bold text-zinc-300">
                  Захиалга үүссэн
                </p>
                <p className="text-[10px] text-zinc-500 mt-0.5">
                  2026-01-14 10:30
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border-2 border-[#09090b] bg-zinc-700" />
                <p className="text-xs font-bold text-zinc-500">
                  Төлбөр хүлээгдэж буй
                </p>
                <p className="text-[10px] text-zinc-600 mt-0.5">
                  2026-01-14 10:31
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column --- */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-5 backdrop-blur-sm">
            <h2 className="mb-3 text-xs font-bold text-white">Тэмдэглэл</h2>
            <textarea
              className="w-full resize-none rounded-xl border border-zinc-800/60 bg-[#09090b] p-3 text-xs text-zinc-400 focus:border-blue-600/40 focus:outline-none focus:ring-1 focus:ring-blue-600/10 transition"
              rows={4}
              placeholder="Бичих..."
            ></textarea>
            <button className="mt-3 w-full rounded-lg bg-zinc-800 py-2 text-[11px] font-bold text-zinc-300 hover:bg-zinc-700 transition">
              Хадгалах
            </button>
          </div>

          <div className="rounded-2xl border border-blue-900/10 bg-blue-600/[0.03] p-5">
            <h3 className="text-[10px] font-bold uppercase text-blue-400 tracking-wider">
              Тусламж
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-zinc-600">
              Захиалгыг засах эсвэл цуцлахад асуудал гарвал IT хэлтэст хандана
              уу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
