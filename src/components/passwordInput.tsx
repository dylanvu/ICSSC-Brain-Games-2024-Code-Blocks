import react from "react";

/**
 * 
 * @param codeBlock - the title of the page
 * @param key - the key to send to the backend in the body
 * @returns 
 */
export default function PasswordInputPage(props: { codeBlock: string, key: string, hint: string }) {
    return (
        <main className="min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>
            <div className="grid place-items-center">
              <h1 className="bg-white border border-lime-800 rounded-md p-2 whitespace-nowrap max-w-min text-lg text-lime-800">
                Block: {props.codeBlock}
              </h1>
              <br></br><br></br>
              <div className="bg-white border border-lime-800 rounded-md p-9 grid place-items-center max-w-min">
                <div className="p-2 text-center text-sm text-lime-800">
                  Hint: {props.hint}
                </div>
                <input placeholder="Input password..." className="border border-lime-800 rounded-md p-2 border"></input>
                <br></br>
                <button className="bg-white border border-lime-800 rounded-md p-2 text-lime-800">Submit</button>
              </div>
            </div>
        </main>
    )
}