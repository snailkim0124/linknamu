"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// TODO: 더미 데이터. 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김민환",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.png",
};

const links = [
  { id: "github", label: "깃허브", href: "https://github.com/snailkim0124", icon: "🐙" },
  { id: "blog", label: "블로그", href: "https://naver.com", icon: "📝" },
  { id: "email", label: "이메일", href: "mailto:kimmingim@naver.com", icon: "📧" },
] as const;

export default function Home() {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: Record<string, number>) => {
        if (!cancelled) setClickCounts((prev) => ({ ...prev, ...data }));
      })
      .catch((error) => console.error("클릭 수를 불러오지 못했습니다.", error));

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLinkClick = (id: string) => {
    // 즉시 화면에 반영(낙관적 업데이트)
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch((error) => console.error("클릭 수 저장에 실패했습니다.", error));
  };

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
              key={link.id}
              label={link.label}
              href={link.href}
              icon={link.icon}
              clickCount={clickCounts[link.id] ?? 0}
              onClick={() => handleLinkClick(link.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
