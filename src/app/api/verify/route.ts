import { NextRequest, NextResponse } from "next/server";

/**
 * parses the request body for the password
 * request bodies will look like:
 * {
 *  "clue": "clue_here",
 *  "password": "inputted_password_here"
 * }
 * @param request 
 * @param param1 
 */
export async function POST(
    request: NextRequest,
    { params }: any,
): Promise<any> {

    const passwords: Record<string, string> = {
        "system": process.env.SYSTEM_PASSWORD || "",
        "out": process.env.OUT_PASSWORD || "",
        "paren": process.env.PAREN_PASSWORD || "",
        "quote": process.env.QUOTE_PASSWORD || "",
        "reversed": process.env.REVERSED_PASSWORD || "",
        "hello-world": process.env.HELLO_WORLD_PASSWORD || "",
    };

    const body = await request.json();
    const key: string = body.key as string;
    const password = body.password;

    if (passwords[key] && password === passwords[key]) {
        return NextResponse.json({ status: 200 });
    }
    else {
        return NextResponse.json({ status: 401 });
    }
}
