import PasswordInputPage from "@/components/passwordInput";
import react from "react";
import minecraft from "@/components/assets/minecraft.png";
import Image from "next/image";
import "@/styles/image.css";


export default function Reversed() {
    return (
        <>
            <PasswordInputPage codeBlock="reversed" blockKey="reversed" hint="Solve the puzzle below to find the password. (answer is singular)" />
            <div className="h-64 w-96 relative m-auto">
                <Image src={minecraft} alt={"Location Image"} fill style={{ "objectFit": "contain" }} />
            </div>
        </>
    )
}