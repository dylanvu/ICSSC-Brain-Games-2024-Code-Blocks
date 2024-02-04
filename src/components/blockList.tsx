import React from "react";

export default function BlockListPage(props: { location: string, codeBlocks: Array<String> }) {
    return (
        <main className="min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white border-2 rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>

            <div className="grid place-items-center">
                <h1 className="bg-white border border-lime-800 border-2 rounded-md p-2 whitespace-nowrap max-w-min text-lg font-bold text-lime-800">
                    Location: {props.location}
                </h1>
                <br></br><br></br>

                <div className="bg-white border border-lime-800 border-2 rounded-md p-9 grid place-items-center max-w-min">
                    <p className="whitespace-nowrap text-lime-800">Click on the block below to find its location:</p>
                    <br></br>
                    {props.codeBlocks.map(block => (
                        // add a special case for the demo only
                        <a href={`/${block === `("Hello World")` ? "hello-world" : block}`} className="underline text-lime-800">{block}</a>
                    ))}
                </div>
            </div>
        </main>
    )
}
