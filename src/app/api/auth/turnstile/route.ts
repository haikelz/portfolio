import { NextRequest, NextResponse } from "next/server";
import { ofetch } from "ofetch";
import { env } from "~env.mjs";

const { NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SECRET_KEY } = env;

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  const response = await ofetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${encodeURIComponent(
        NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SECRET_KEY
      )}&response=${encodeURIComponent(token)}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }
  );

  return NextResponse.json(JSON.stringify(response), {
    status: response.success ? 200 : 400,
    headers: { "content-type": "application/json" },
  });
}
