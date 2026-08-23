type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  const initial = name.trim().charAt(0);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-40 w-40 overflow-hidden rounded-full border border-black/10 bg-neutral-200 dark:border-white/10 dark:bg-neutral-700">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-neutral-500 dark:text-neutral-300">
            {initial}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-lg font-bold text-foreground">{name}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
