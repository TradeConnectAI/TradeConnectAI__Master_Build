import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const message = body.message;

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            reply: `AI assistant reply to: ${message}`,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Chat request failed" },
            { status: 500 }
        );
    }
}