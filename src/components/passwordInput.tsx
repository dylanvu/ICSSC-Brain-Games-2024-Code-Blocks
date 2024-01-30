import react from "react";

/**
 * 
 * @param codeBlock - the title of the page
 * @param key - the key to send to the backend in the body
 * @returns 
 */
export default function PasswordInputPage(props: { codeBlock: string, key: string, hint: string }) {
    return (
        <div>
            <h1>
                {props.codeBlock}
            </h1>
            <div>
                {props.hint}
            </div>
        </div >
    )
}