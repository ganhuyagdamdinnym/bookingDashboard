import { notFound } from "next/navigation";
import { getServiceById } from "../../../lib/data";

export default async function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12">
      {/* --- Page Header --- */}
      <div className="flex flex-col gap-6 border-b border-zinc-800/50 pb-6 lg:flex-row lg:items-center lg:justify-between px-2">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight text-white">
              {service.name}
            </h1>
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                service.active
                  ? "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20"
                  : "bg-zinc-800 text-zinc-500 ring-1 ring-zinc-700"
              }`}
            >
              {service.active ? "Active" : "Inactive"}
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500 font-medium">
            Үйлчилгээний дотоод тохиргоо болон үнийн мэдээлэл.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-bold text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200">
            Засах
          </button>
          <button className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-zinc-200">
            Идэвхгүй болгох
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* --- Left Column: Core Settings --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-6 backdrop-blur-sm">
            <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Үндсэн тохиргоо
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                  Ангилал
                </p>
                <p className="text-base font-bold text-white">
                  {service.category}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                  Үргэлжлэх хугацаа
                </p>
                <p className="text-base font-bold text-white">
                  {service.durationMinutes} минут
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-zinc-800/30">
                <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                  Нэгж үнэ
                </p>
                <p className="text-xl font-black text-blue-500">
                  ₮{service.priceMnt.toLocaleString()}
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-zinc-800/30">
                <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                  Үйлчилгээний ID
                </p>
                <p className="text-sm font-mono text-zinc-400">
                  #SRV-{service.id}
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Placeholder */}
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/5 p-6 border-dashed">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Нарийвчилсан тохиргоо
            </h2>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Энэ хэсэгт үйлчилгээний нэмэлт тайлбар, зураг болон бусад
              техникийн тохиргоог холбох боломжтой.
            </p>
          </div>
        </div>

        {/* --- Right Column: Internal Info --- */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-5 backdrop-blur-sm">
            <h2 className="mb-3 text-xs font-bold text-white">
              Дотоод тэмдэглэл
            </h2>
            <div className="rounded-xl bg-[#09090b] border border-zinc-800/60 p-4">
              <p className="text-[11px] leading-relaxed text-zinc-500">
                Энэ үйлчилгээ нь хамгийн эрэлттэй багцад тооцогддог. Өөрчлөлт
                оруулахдаа маркетингийн багтай зөвлөнө үү.
              </p>
            </div>
            <button className="mt-4 w-full rounded-lg border border-zinc-800 py-2 text-[11px] font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
              Тэмдэглэл засах
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800/20 bg-zinc-900/5 p-5">
            <h3 className="text-[10px] font-bold uppercase text-zinc-600 tracking-wider">
              Статистик
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-zinc-500">Нийт захиалга</span>
                <span className="text-xs font-bold text-white">128</span>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
