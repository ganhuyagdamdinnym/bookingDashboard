"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    href: "/bookings",
    label: "Bookings",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    href: "/services",
    label: "Services",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
  },
  {
    href: "/users",
    label: "Users",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197",
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    href: "/category",
    label: "Ангилал",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-zinc-800 bg-[#09090b] px-4 py-8 md:flex h-screen sticky top-0">
      {/* Brand Section */}
      <div className="mb-10 px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            B
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            booking<span className="text-blue-600">.</span>
          </span>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 border border-zinc-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            System Ready
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-zinc-900 text-white shadow-inner ring-1 ring-zinc-800"
                  : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200"
              }`}
            >
              <svg
                className={`h-5 w-5 transition-colors duration-200 ${
                  active
                    ? "text-blue-500"
                    : "text-zinc-600 group-hover:text-zinc-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={link.icon}
                />
              </svg>
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Info / Admin Profile */}
      <div className="mt-auto border-t border-zinc-800 pt-6 px-2">
        <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/40 p-3 border border-zinc-800/50">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-400 uppercase">
            AD
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-zinc-200 truncate">
              Админ
            </span>
            <span className="text-[10px] text-zinc-500 truncate">
              admin@booking.mn
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
