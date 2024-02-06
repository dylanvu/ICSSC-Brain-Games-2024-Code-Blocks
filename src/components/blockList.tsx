import React from "react";

export default function BlockListPage(props: { location: string, codeBlocks: Array<String> }) {
    return (
        <main className="w-screen min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white border-2 rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>
            <br></br>

            <div className="grid place-items-center">
                <div className="w-screen grid place-items-center bg-white border border-lime-800 border-2 rounded-md p-2 text-lg font-bold text-lime-800">
                  <h1>
                    Location:
                  </h1>
                  <h1>
                    {props.location}
                  </h1>
                </div>
                <br></br><br></br>

                <div className="grid place-items-center bg-white border border-lime-800 border-2 rounded-md p-9 max-w-min">
                    <p className="whitespace-nowrap text-lime-800">Click on the block below</p>
                    <p className="whitespace-nowrap text-lime-800">to find its location:</p>
                    <br></br>
                    {props.codeBlocks.map((block, index) => (
                        // add a special case for the demo only
                        <a key={block + index.toString()} href={`/block/${block === `("Hello World")` ? "hello-world" : block}`} className="underline text-lime-800">{block}</a>
                    ))}
                </div>
            </div>
        </main>
    )
}
