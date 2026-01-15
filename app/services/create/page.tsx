"use client";

import Link from "next/link";
import { useState } from "react";
import { DurationSettings } from "../components/date";
import { ImageUpload } from "../components/imageUpload";
// --- Жижиг туслах компонентууд ---

const FormLabel = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="space-y-1 mb-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 leading-none">
      {children}
    </label>
    {subtitle && <p className="text-[10px] text-zinc-600 ml-1">{subtitle}</p>}
  </div>
);

const FormInput = (props: any) => (
  <input
    {...props}
    className="w-full rounded-2xl border border-zinc-800 bg-[#09090b] px-4 py-3.5 text-sm text-white focus:border-blue-600/50 focus:outline-none transition placeholder:text-zinc-700"
  />
);

// --- Үндсэн CreateServicePage ---

export default function CreateServicePage() {
  const [durationType, setDurationType] = useState("daily");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mx-auto max-w-3xl space-y-8 pb-12 font-sans selection:bg-blue-500/30">
      {/* --- Header --- */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6 px-2">
        <div>
          <Link
            href="/services"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition mb-2 block"
          >
            ← Жагсаалт руу буцах
          </Link>
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Шинэ үйлчилгээ
          </h1>
        </div>
        <button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              alert("Амжилттай хадгалагдлаа!");
              setIsLoading(false);
            }, 1000);
          }}
          disabled={isLoading}
          className="rounded-xl bg-white px-8 py-2.5 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-200 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? "Уншиж байна..." : "Хадгалах"}
        </button>
      </div>

      <div className="rounded-[2.5rem] border border-zinc-800/40 bg-zinc-900/10 p-8 backdrop-blur-md space-y-8">
        {/* Section 1: Name */}
        <div className="space-y-2">
          <FormLabel subtitle="Үйлчилгээний нэрийг оруулна уу (Жишээ: Эрэгтэй үс засалт)">
            Үйлчилгээний нэр
          </FormLabel>
          <FormInput placeholder="Үйлчилгээний нэр..." />
        </div>
        <ImageUpload />
        {/* Section 2: Dynamic Time Settings */}
        <DurationSettings type={durationType} setType={setDurationType} />

        {/* Section 3: Price & Category */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-6 border-t border-zinc-800/30">
          <div className="space-y-2">
            <FormLabel subtitle="Үйлчилгээний нэг удаагийн үнэ">
              Үнэ (MNT)
            </FormLabel>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-zinc-600">
                ₮
              </span>
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-2xl border border-zinc-800 bg-[#09090b] pl-10 pr-4 py-3.5 text-sm text-white focus:border-blue-600/50 focus:outline-none transition"
              />
            </div>
          </div>
          <div className="space-y-2">
            <FormLabel subtitle="Системд харагдах ангилал">Ангилал</FormLabel>
            <select className="w-full appearance-none rounded-2xl border border-zinc-800 bg-[#09090b] px-4 py-3.5 text-sm text-white focus:border-blue-500/50 focus:outline-none transition cursor-pointer">
              <option>Үсчин</option>
              <option>Гоо сайхан</option>
              <option>Түрээс</option>
              <option>Бусад</option>
            </select>
          </div>
        </div>

        {/* Section 4: Status Toggle */}
        <div className="pt-6 border-t border-zinc-800/30">
          <div className="flex items-center justify-between rounded-2xl bg-black/40 p-4 border border-zinc-800/50">
            <div>
              <p className="text-[11px] font-bold uppercase text-white">
                Шууд идэвхжүүлэх
              </p>
              <p className="text-[10px] text-zinc-500">
                Захиалга авахад бэлэн болмогц идэвхжүүлнэ үү.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
