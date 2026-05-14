import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

const cooldownMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    const now = Date.now();
    const lastSubmission = cooldownMap.get(ip);

    if (
      lastSubmission &&
      now - lastSubmission < 60000
    ) {
      return NextResponse.json(
        {
          error:
            "please wait before submitting again.",
        },
        { status: 429 }
      );
    }

    cooldownMap.set(ip, now);

    console.log("new transmission:", email);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NOTIFY_EMAIL!,
      subject: "New Footerthing Submission",
      html: `
        <div style="font-family: monospace;">
          <h2>new transmission</h2>
          <p>${email}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "error" },
      { status: 500 }
    );
  }
}
