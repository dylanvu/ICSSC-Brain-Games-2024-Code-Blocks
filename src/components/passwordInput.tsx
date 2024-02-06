'use client'
import React, { useState } from "react";

/**
 * 
 * @param codeBlock - the title of the page
 * @param blockKey - the key to send to the backend in the body
 * @returns 
 */
export default function PasswordInputPage(props: { codeBlock: string, blockKey: string, hint: string }) {
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('waiting');
    const [incorrect, setIncorrect] = useState('');

    const handlePasswordInput = (input: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(input.target.value);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                body: JSON.stringify({
                    "key": props.blockKey,
                    "password": password
                }),
            });

            if (response.ok) {
                sessionStorage.setItem('passwordToken', password);
                setStatus('success');
            } else {
                setStatus('fail');
                setIncorrect('Incorrect. Please try again.')
            }
        } catch (error) {
            console.error('Error: ', error);
            setStatus('fail');
        }
    }

    return (
        <main className="w-screen min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white border-2 rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>
            <br></br>

            <div className="grid place-items-center">

                <h1 className="bg-white border border-lime-800 border-2 rounded-md p-2 whitespace-nowrap max-w-min text-lg font-bold text-lime-800">
                    Block: {props.codeBlock}
                </h1>
                <br></br><br></br>

                <div className="bg-white border border-lime-800 border-2 rounded-md p-9 grid place-items-center max-w-min">
                    <div className="p-2 text-center text-sm text-lime-800">
                        Hint: {props.hint}
                    </div>

                    <form onSubmit={handleFormSubmit} className="grid place-items-center">
                        <input value={password} placeholder="Input password..." onChange={handlePasswordInput}
                            disabled={status === 'loading'} className="border border-lime-800 rounded-md p-2 border"></input>
                        <br></br>

                        <button type="submit" disabled={status === 'loading' || status === "success"} className="bg-white border border-lime-800 rounded-md p-2 text-lime-800">Submit</button>
                    </form>
                    {incorrect === 'Incorrect. Please try again.' && <p className="text-sm text-red-600">{incorrect}</p>}
                    {status === "success" ?
                        <a href={`/block/${props.blockKey}/location`}>
                            <button className="mt-5 bg-green-500 border border-lime-800 rounded-md p-2 text-lime-800">
                                Success! Go see location!
                            </button>
                        </a> : null}
                    {status === "success" ? <div className="mt-5">If you are having trouble being redirected to the location, please enable cookies.</div> : null}
                </div>

            </div>
        </main>
    )
}