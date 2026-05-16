import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const data = body.data;

        if (!data) {
            return NextResponse.json(
                { error: "No data provided" },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Data saved successfully",
            savedData: data,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Save request failed" },
            { status: 500 }
        );
    }
}