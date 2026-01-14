"use client";

import type { ReactNode } from "react";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, children, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-zinc-700"
          >
            Close
          </button>
        </div>
        <div className="mt-4 text-sm text-zinc-700">{children}</div>
      </div>
    </div>
  );
}

