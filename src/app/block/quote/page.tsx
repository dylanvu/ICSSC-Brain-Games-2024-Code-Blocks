import PasswordInputPage from "@/components/passwordInput";
import react from "react";

export default function Quote() {
    return (
        <PasswordInputPage codeBlock={`"`} blockKey="quote" hint="I am not alive, but I can grow. I don't have lungs, but I need air. What am I? (all lower case)" />
    )
}