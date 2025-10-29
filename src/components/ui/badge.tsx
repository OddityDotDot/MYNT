import * as React from "react";
import clsx from "clsx";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700", className)} {...props} />;
}
