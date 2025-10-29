import * as React from "react";
import clsx from "clsx";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={clsx("h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2", className)} {...props} />
  )
);
Input.displayName = "Input";
