'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { StaticImageData } from "next/image";
import LocationImageContainer from "./locationImageContainer";

export default function LocationImage({ codeBlock, blockKey, images }: { codeBlock: string, blockKey: string, images: StaticImageData[] }) {
    const router = useRouter()
    useEffect(() => {
        // pull from the local storage
        const password = sessionStorage.getItem('passwordToken');
        if (!password || password.length === 0) {
            // if not present, redirect to key/
            router.push(`/block/${blockKey}`);
        } else {
            // make the API call
            fetch('/api/verify', {
                method: 'POST',
                body: JSON.stringify({
                    "key": blockKey,
                    "password": password
                }),
            }).then((res) => {
                if (res.ok) {
                    // if it is OK, set the state and render the image
                    setCorrect(true);
                } else {
                    // redirect to key/
                    router.push(`/block/${blockKey}`);
                }
            });
        }
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
                        images.map((image, index) => <LocationImageContainer key={blockKey + index.toString() + "-image"} image={image} />)
                        : <div>
                            Password is incorrect!
                        </div>
                }
            </div>
        </main>
    )
}