import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.organization?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("=== New Enterprise Inquiry ===");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Organization:", body.organization);
    console.log("Message:", body.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("==============================");

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. Our business team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}