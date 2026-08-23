import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon?: ReactNode;
};

export default function LinkCard({ label, href, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    >
      {icon ? <span className="h-5 w-5 shrink-0">{icon}</span> : null}
      <span className="mx-auto">{label}</span>
    </a>
  );
}
