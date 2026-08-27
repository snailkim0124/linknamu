import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// TODO: 더미 데이터. 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김민환",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.png",
};

const links = [
  { label: "깃허브", href: "https://github.com/snailkim0124", icon: "🐙" },
  { label: "블로그", href: "https://naver.com", icon: "📝" },
  { label: "이메일", href: "mailto:kimmingim@naver.com", icon: "📧" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-10">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />

        <div className="flex w-full flex-col gap-4">
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
