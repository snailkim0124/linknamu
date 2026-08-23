import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { GithubIcon, LinkedInIcon, BlogIcon } from "@/components/icons";

// TODO: 더미 데이터. 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김민환",
  bio: "세계 최강 바이브코더",
  avatarUrl: undefined,
};

const links = [
  { label: "Github", href: "https://github.com/", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <LinkedInIcon /> },
  { label: "Blog", href: "https://example.com/", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-[2rem] border border-black/10 bg-background p-8 dark:border-white/10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />

        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              label={link.label}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
