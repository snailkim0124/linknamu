// 클릭 수를 집계할 링크 id 목록.
// page.tsx(클라이언트)와 API 라우트(서버) 양쪽에서 공유합니다.
export const LINK_IDS = ["github", "blog", "email"] as const;
export type LinkId = (typeof LINK_IDS)[number];

export function isLinkId(value: unknown): value is LinkId {
  return typeof value === "string" && (LINK_IDS as readonly string[]).includes(value);
}
