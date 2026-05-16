import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const prompt = body.prompt;

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt missing" },
                { status: 400 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert trades business assistant that creates professional customer quotes.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7,
        });

        const result =
            completion.choices[0]?.message?.content ||
            "No response generated.";

        return NextResponse.json({
            success: true,
            result,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "AI generation failed" },
            { status: 500 }
        );
    }
}