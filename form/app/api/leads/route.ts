import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL is not configured");

      return NextResponse.json(
        { error: "Webhook is not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Make webhook failed:", response.status);

      return NextResponse.json(
        { error: "Failed to send lead" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
