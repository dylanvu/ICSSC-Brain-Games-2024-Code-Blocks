import PasswordInputPage from "@/components/passwordInput";
import react from "react";

export default function HelloWorld() {
    return (
        <PasswordInputPage codeBlock={`("Hello World")`} key="hello-world" hint="A Farm Life Simulation Game" />
    )
}