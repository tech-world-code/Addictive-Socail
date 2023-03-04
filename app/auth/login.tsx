'use client'

import { signIn } from 'next-auth/react'
import "./nav-styles.css"

export default function () {
    return (
        <li className="list-none">
            <button onClick={() => signIn()}>Sign in</button>
        </li>
    )
}