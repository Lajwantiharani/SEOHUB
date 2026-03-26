import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  website?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Starter endpoint received the enquiry. Connect this route to email, a database, or your CRM next."
  });
}
