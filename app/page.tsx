import Link from "next/link";
import { StatsCard } from "../components/admin/StatsCard";
import { Table } from "../components/admin/Table";
import { bookings, services } from "../lib/data";
import type { Booking } from "../types";

export default function Home() {
  const latest: Booking[] = bookings.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#09090b] p-4 sm:p-8 text-zinc-400">
      {/* Header хэсэг */}
      <div className="flex flex-col justify-between gap-6 pb-10 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Overview
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Системийн өнөөдрийн гүйцэтгэл
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-10 px-4 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition text-sm font-medium">
            Тайлан татах
          </button>
          <button className="h-10 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition text-sm font-bold shadow-lg shadow-blue-900/20">
            Шинэ үйлчилгээ +
          </button>
        </div>
      </div>

      {/* Stats Section - Картуудыг дэвсгэрээсээ ялимгүй гэгээлэг болгов */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Нийт захиалга",
            value: "1,248",
            helper: "+12%",
            trend: "up",
          },
          { label: "Орлого", value: "38.4M", helper: "+8%", trend: "up" },
          {
            label: "Идэвхтэй",
            value: "24",
            helper: "3 идэвхгүй",
            trend: "neutral",
          },
          { label: "Хэрэглэгч", value: "96", helper: "+5%", trend: "up" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
          >
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {s.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-white">{s.value}</h3>
              <span className="text-xs font-medium text-emerald-500">
                {s.helper}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content Grid */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart Card */}
        <div className="lg:col-span-2 rounded-[24px] border border-zinc-800 bg-zinc-900/30 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-white">Захиалгын график</h3>
            <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
              <button className="px-3 py-1 text-[10px] font-bold bg-zinc-800 text-white rounded-md">
                7D
              </button>
              <button className="px-3 py-1 text-[10px] font-bold text-zinc-500">
                30D
              </button>
            </div>
          </div>
          {/* Visualizing Data with better contrast */}
          <div className="flex h-48 items-end justify-between gap-2 px-2">
            {[30, 45, 35, 60, 90, 70, 50].map((h, i) => (
              <div
                key={i}
                className="group relative flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-zinc-800 rounded-t-md transition-all group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  style={{ height: `${h}%` }}
                />
                <span className="mt-2 text-[10px] text-zinc-600">
                  Day {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pulse / Activity Card */}
        <div className="rounded-[24px] border border-blue-900/20 bg-gradient-to-br from-zinc-900 to-[#09090b] p-8">
          <h3 className="font-bold text-white">Системийн төлөв</h3>
          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Серверийн ачаалал</span>
                <span className="text-emerald-500">99.9%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-[99%] bg-emerald-500" />
              </div>
            </div>
            <div className="flex items-center justify-between py-4 border-t border-zinc-800">
              <span className="text-sm text-zinc-500">Идэвхтэй захиалга</span>
              <span className="text-xl font-bold text-white">12</span>
            </div>
            <div className="flex items-center justify-between py-4 border-t border-zinc-800">
              <span className="text-sm text-zinc-500">Өнөөдрийн орлого</span>
              <span className="text-xl font-bold text-white text-blue-400">
                ₮2.4M
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section - Dark & Minimal */}
      <section className="mt-8 rounded-[24px] border border-zinc-800 bg-zinc-900/20 overflow-hidden">
        <div className="px-8 py-6 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="font-bold text-white">Сүүлийн захиалгууд</h3>
          <Link
            href="/bookings"
            className="text-xs text-blue-500 font-bold hover:text-blue-400 transition"
          >
            Бүгдийг үзэх
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900/50 text-zinc-500 text-[11px] uppercase tracking-widest font-bold">
              <tr>
                <th className="px-8 py-4">Customer</th>
                <th className="px-8 py-4">Service</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {latest.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-800/30 transition">
                  <td className="px-8 py-4 font-medium text-white">
                    {row.customerName}
                  </td>
                  <td className="px-8 py-4 text-zinc-500">{row.serviceName}</td>
                  <td className="px-8 py-4 text-zinc-500">{row.time}</td>
                  <td className="px-8 py-4 text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${
                        row.status === "confirmed"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {row.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
