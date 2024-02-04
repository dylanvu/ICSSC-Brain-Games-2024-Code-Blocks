'use client'
import React, { useState, useEffect } from "react";
import { redirect } from 'next/navigation'
import { StaticImageData } from "next/image";
import LocationImageContainer from "./locationImageContainer";

export default function LocationImage({ codeBlock, key, images }: { codeBlock: string, key: string, images: StaticImageData[] }) {
    useEffect(() => {
        // pull from the local storage
        // const password = sessionStorage.getItem('passwordToken');
        // if (!password || password.length === 0) {
        //     // if not present, redirect to key/
        //     redirect(`/${key}`); // Redirect user to password page
        // } else {
        //     // make the API call
        //     fetch('/api/verify', {
        //         method: 'POST',
        //         body: {
        //             "key": key,
        //             "password": password
        //         },
        //     }).then((res) => {
        //         if (res.ok) {
        //             // if it is OK, set the state and render the image
        //             setCorrect(true);
        //         } else {
        //             // redirect to key/
        //             redirect(`/${key}`); // Redirect user to password page
        //         }
        //     });
        // }
    }, []);

    const [correct, setCorrect] = useState<boolean>(true);
    return (
        <main className="min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white border-2 rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>

            <div className="grid place-items-center">

                <h1 className="bg-white border border-lime-800 border-2 rounded-md p-2 whitespace-nowrap max-w-min text-lg font-bold text-lime-800">
                    Block: {codeBlock}
                </h1>
                <br></br><br></br>

                {
                    correct ?
                        images.map((image) => <LocationImageContainer image={image} />)
                        : <div>
                            Password is incorrect!
                        </div>
                }
            </div>
        </main>
    )
}