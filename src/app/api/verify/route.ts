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

}