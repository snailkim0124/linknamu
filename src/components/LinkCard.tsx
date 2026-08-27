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
      className="glass-card group flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium text-foreground shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      {icon ? (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none">
          {icon}
        </span>
      ) : null}
      <span className="mx-auto tracking-tight">{label}</span>
    </a>
  );
}
