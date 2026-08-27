type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  const initial = name.trim().charAt(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full bg-gradient-to-br from-white/80 via-white/40 to-transparent p-1 shadow-avatar dark:from-white/20 dark:via-white/5">
        <div className="h-32 w-32 overflow-hidden rounded-full bg-neutral-200 sm:h-36 sm:w-36 dark:bg-neutral-700">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarUrl}
              alt={`${name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-neutral-500 dark:text-neutral-300">
              {initial}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-xl font-bold tracking-tight text-foreground">{name}</p>
        <p className="max-w-xs text-sm leading-relaxed text-foreground/60">{bio}</p>
      </div>
    </div>
  );
}
