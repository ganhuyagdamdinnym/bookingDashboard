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

export const DurationSettings = ({
  type,
  setType,
}: {
  type: string;
  setType: (t: string) => void;
}) => {
  return (
    <div className="space-y-6 pt-6 border-t border-zinc-800/30">
      <div className="space-y-3">
        <FormLabel subtitle="Үйлчилгээ ямар цагийн хуваариар явагдах вэ?">
          Хугацааны төрөл сонгох
        </FormLabel>
        <div className="grid grid-cols-3 gap-2 p-1 bg-black/40 rounded-2xl border border-zinc-800/50">
          {[
            { id: "daily", label: "Өдөр бүр" },
            { id: "range", label: "Хугацаа (Зааг)" },
            { id: "single", label: "Нэг өдөр" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setType(t.id)}
              className={`rounded-xl py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                type === t.id
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-900/20 p-6 border border-zinc-800/30">
        {/* төрөл 1: ӨДӨР БҮР (Үсчин, Спа, Зөвлөх гэх мэт) */}
        {type === "daily" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormLabel>Ажиллах цаг (Эхлэх)</FormLabel>
                <FormInput type="time" defaultValue="09:00" />
              </div>
              <div className="space-y-2">
                <FormLabel>Ажиллах цаг (Дуусах)</FormLabel>
                <FormInput type="time" defaultValue="18:00" />
              </div>
            </div>
            <div className="space-y-2">
              <FormLabel subtitle="Нэг үйлчлүүлэгчид зарцуулах хугацаа">
                Үргэлжлэх хугацаа (Минутаар)
              </FormLabel>
              <div className="relative">
                <FormInput type="number" defaultValue="30" placeholder="30" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-zinc-600">
                  минут
                </span>
              </div>
            </div>
          </div>
        )}

        {/* төрөл 2: ХУГАЦААНЫ ЗААГ (Period: Эхлэх огноо - Дуусах огноо) */}
        {type === "range" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="space-y-2">
              <FormLabel>Эхлэх өдөр & цаг</FormLabel>
              <FormInput type="datetime-local" />
            </div>
            <div className="space-y-2">
              <FormLabel>Дуусах өдөр & цаг</FormLabel>
              <FormInput type="datetime-local" />
            </div>
          </div>
        )}

        {/* төрөл 3: НЭГ ӨДӨР (Event: Зөвхөн нэг тодорхой өдөр) */}
        {type === "single" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="space-y-2">
              <FormLabel>Болох өдөр</FormLabel>
              <FormInput type="date" />
            </div>
            <div className="space-y-2 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <FormLabel>Эхлэх</FormLabel>
                  <FormInput type="time" />
                </div>
                <div>
                  <FormLabel>Дуусах</FormLabel>
                  <FormInput type="time" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
