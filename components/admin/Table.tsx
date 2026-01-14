import type { ReactNode } from "react";

type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  getKey: (row: T) => string;
};

export function Table<T>({ columns, rows, getKey }: Props<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-100 text-xs uppercase tracking-wider text-zinc-500">
            {columns.map((col) => (
              <th key={String(col.key)} className="py-2 pr-4">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getKey(row)} className="border-b border-zinc-50">
              {columns.map((col) => (
                <td key={String(col.key)} className="py-2 pr-4">
                  {col.render
                    ? col.render(row)
                    : (row as any)[col.key as string]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

