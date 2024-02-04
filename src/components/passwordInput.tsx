'use client'
import React, { useState } from "react";
import { redirect } from 'next/navigation';

/**
 * 
 * @param codeBlock - the title of the page
 * @param key - the key to send to the backend in the body
 * @returns 
 */
export default function PasswordInputPage(props: { codeBlock: string, key: string, hint: string }) {
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('waiting');
    const [incorrect, setIncorrect] = useState('');

    const handlePasswordInput = (input) => {
        setPassword(input.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                body: {
                    "key": props.key,
                    "password": password
                },
            });

            if (response.ok) {
                sessionStorage.setItem('passwordToken', password);
                setStatus('success');
                redirect(`/block/${props.key}/location`); // Redirect user to location page
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
        <main className="min-h-screen p-4 font-mono">
            <h1 className="bg-lime-800 border border-white border-2 rounded-md p-2 whitespace-nowrap max-w-min text-white">
                Code Blocks
            </h1>

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

                        <button type="submit" disabled={status === 'loading'} className="bg-white border border-lime-800 rounded-md p-2 text-lime-800">Submit</button>
                    </form>
                    {incorrect === 'Incorrect. Please try again.' && <p className="text-sm text-red-600">{incorrect}</p>}

                </div>

            </div>
        </main>
    )
}
