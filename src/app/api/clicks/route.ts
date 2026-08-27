import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { LINK_IDS, isLinkId } from "@/lib/links";

export const dynamic = "force-dynamic";

type ClickDoc = { _id: string; count: number };

// 모든 링크의 현재 클릭 수를 한 번에 반환. 예: { github: 3, blog: 0, email: 12 }
export async function GET() {
  try {
    const db = await getDb();
    const docs = await db
      .collection<ClickDoc>("linkClicks")
      .find({ _id: { $in: [...LINK_IDS] } })
      .toArray();

    const counts = Object.fromEntries(LINK_IDS.map((id) => [id, 0])) as Record<
      string,
      number
    >;
    for (const doc of docs) {
      counts[doc._id] = doc.count ?? 0;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("[GET /api/clicks]", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}

// 특정 링크의 클릭 수를 1 증가시키고, 갱신된 값을 반환.
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as { id?: unknown } | null;
    const id = body?.id;

    if (!isLinkId(id)) {
      return NextResponse.json({ error: "잘못된 링크 id입니다." }, { status: 400 });
    }

    const db = await getDb();
    const updated = await db.collection<ClickDoc>("linkClicks").findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

    // 드라이버 버전에 따라 결과가 문서 자체이거나 { value: 문서 } 형태일 수 있음
    const doc = (updated && "value" in updated ? updated.value : updated) as
      | ClickDoc
      | null;

    return NextResponse.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("[POST /api/clicks]", error);
    return NextResponse.json(
      { error: "클릭 수를 저장하지 못했습니다." },
      { status: 500 }
    );
  }
}
