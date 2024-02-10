import { NextRequest, NextResponse } from "next/server";
const passwords: Record<string, string> = {
    "system": process.env.SYSTEM_PASSWORD || "",
    "out": process.env.OUT_PASSWORD || "",
    "paren": process.env.PAREN_PASSWORD || "",
    "quote": process.env.QUOTE_PASSWORD || "",
    "reversed": process.env.REVERSED_PASSWORD || "",
    "hello-world": process.env.HELLO_WORLD_PASSWORD || "",
};
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

    const body = await request.json();
    const key: string = body.key;
    const password: string = body.password;
    // do some sanitation
    const cleanRealPassword = passwords[key].trim().toLowerCase();
    let cleanPassword = password.trim().toLowerCase();
    // some cleaning up of answers
    // remove plurality for the reversed clue only
    if (key === "reversed" && cleanPassword.at(-1) === "s") {
        cleanPassword = cleanPassword.slice(0, -1);
    }
    console.log(cleanRealPassword)
    console.log(cleanPassword)
    if (cleanRealPassword && cleanPassword === cleanRealPassword) {
        return NextResponse.json({}, { status: 200 });
    }
    else {
        return NextResponse.json({ error: "incorrect password" }, { status: 401 });
    }
}
