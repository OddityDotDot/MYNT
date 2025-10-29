import * as React from "react";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline", size?: "sm"|"md"|"lg" };
export function Button({ className, variant="default", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizes = { sm: "h-8 px-3", md: "h-10 px-4", lg: "h-12 px-6" };
  const variants = { default: "bg-black text-white hover:bg-black/85", outline: "border border-slate-300 hover:bg-slate-50" };
  return <button className={clsx(base, sizes[size], variants[variant], className)} {...props} />;
}
export default Button;
