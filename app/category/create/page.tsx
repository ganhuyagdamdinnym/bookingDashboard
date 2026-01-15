"use client";

import Link from "next/link";
import { useState } from "react";

// --- Туслах компонентууд ---
const FormLabel = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="space-y-1 mb-2 font-sans">
    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 leading-none">
      {children}
    </label>
    {subtitle && <p className="text-[10px] text-zinc-600 ml-1">{subtitle}</p>}
  </div>
);

const FormInput = (props: any) => (
  <input
    {...props}
    className="w-full rounded-2xl border border-zinc-800 bg-[#09090b] px-4 py-3.5 text-sm text-white focus:border-blue-600/50 focus:outline-none transition placeholder:text-zinc-700 font-sans"
  />
);

export default function CreateCategory() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-8 pb-12 font-sans selection:bg-blue-500/30">
      {/* --- Page Header --- */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6 px-2">
        <div>
          <Link
            href="/categories"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition mb-2 block"
          >
            ← Ангиллын жагсаалт
          </Link>
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Шинэ ангилал
          </h1>
        </div>
        <button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              alert("Ангилал амжилттай нэмэгдлээ!");
              setIsLoading(false);
            }, 800);
          }}
          disabled={isLoading}
          className="rounded-xl bg-white px-8 py-2.5 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-200 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? "Хадгалж байна..." : "Үүсгэх"}
        </button>
      </div>

      {/* --- Main Form --- */}
      <div className="rounded-[2.5rem] border border-zinc-800/40 bg-zinc-900/10 p-8 backdrop-blur-md space-y-8 shadow-2xl shadow-black/50">
        {/* Section 1: Basic Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <FormLabel subtitle="Жишээ: Үс засалт, Гоо сайхан, Спа">
              Ангиллын нэр
            </FormLabel>
            <FormInput placeholder="Ангиллын нэр оруулна уу..." />
          </div>

          <div className="space-y-2">
            <FormLabel subtitle="URL хаягт харагдах нэр (Автоматаар үүснэ)">
              Slug / Хоч нэр
            </FormLabel>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-zinc-600">
                /category/
              </span>
              <input
                type="text"
                placeholder="hair-cut"
                className="w-full rounded-2xl border border-zinc-800 bg-[#09090b] pl-20 pr-4 py-3.5 text-sm text-white focus:border-blue-600/50 focus:outline-none transition font-mono"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Icon & Style */}

        {/* Section 3: Description */}
        <div className="pt-8 border-t border-zinc-800/30 space-y-2">
          <FormLabel subtitle="Энэ ангилалд ямар төрлийн үйлчилгээ багтах вэ?">
            Тайлбар (Заавал биш)
          </FormLabel>
          <textarea
            rows={3}
            className="w-full resize-none rounded-2xl border border-zinc-800 bg-[#09090b] px-4 py-3.5 text-sm text-white focus:border-blue-600/50 focus:outline-none transition placeholder:text-zinc-700"
            placeholder="Товч тайлбар бичнэ үү..."
          />
        </div>
      </div>

      {/* --- Footer Note --- */}
      <div className="rounded-2xl border border-zinc-800/50 bg-black/20 p-6">
        <div className="flex gap-3">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
            >
              <path
                d="M12 16V12M12 8H12.01"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 leading-relaxed">
            Зөвлөмж: Ангиллын нэр богино байх тусам гар утасны апп болон вэб
            дээр илүү цэгцтэй харагддаг.
          </p>
        </div>
      </div>
    </div>
  );
}
