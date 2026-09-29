import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const required = [
      "clientName",
      "email",
      "company",
      "service",
      "projectStartDate",
      "projectDeadline",
    ];

    for (const field of required) {
      if (!data[field] || !String(data[field]).trim()) {
        return NextResponse.json(
          { error: "Missing required field: " + field },
          { status: 400 },
        );
      }
    }

    const webhookUrl = process.env.MAKE_CLIENT_INTAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("MAKE_CLIENT_INTAKE_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "Client intake webhook is not configured" },
        { status: 500 },
      );
    }

    const payload = {
      clientName: String(data.clientName).trim(),
      email: String(data.email).trim(),
      company: String(data.company).trim(),
      service: String(data.service).trim(),
      projectStartDate: String(data.projectStartDate).trim(),
      projectDeadline: String(data.projectDeadline).trim(),
      clientId: "CL-" + Date.now(),
      clientStatus: "New Client",
      onboardingStatus: "Not Started",
      notes: data.notes ? String(data.notes).trim() : "",
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Make client intake webhook failed:", response.status);
      return NextResponse.json(
        { error: "Failed to start client onboarding" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Client intake submission error:", error);
    return NextResponse.json(
      { error: "Invalid client intake request" },
      { status: 400 },
    );
  }
}
