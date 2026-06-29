import { checkDemoUrlStatus, isSafeDemoUrl } from "@/lib/checkDemoUrlStatus";

export async function GET(request) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url || !isSafeDemoUrl(url)) {
    return Response.json({ live: false, error: "invalid_url" }, { status: 400 });
  }

  const live = await checkDemoUrlStatus(url);

  return Response.json(
    { live },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
