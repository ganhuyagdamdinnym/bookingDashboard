import { useState } from "react";
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
export const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <FormLabel subtitle="Үйлчилгээг илэрхийлэх чанартай зураг оруулна уу (Max 5MB)">
        Үйлчилгээний зураг
      </FormLabel>
      <div className="group relative flex h-48 cursor-pointer items-center justify-center rounded-[2rem] border-2 border-dashed border-zinc-800 bg-black/20 transition hover:border-zinc-600 hover:bg-black/40">
        {preview ? (
          <div className="relative h-full w-full p-2">
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setPreview(null);
              }}
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white backdrop-blur-md transition hover:bg-red-500"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-zinc-400">
                Зураг сонгох эсвэл чирч оруулна уу
              </p>
              <p className="mt-1 text-[10px] text-zinc-600">
                PNG, JPG эсвэл WEBP (16:9)
              </p>
            </div>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
