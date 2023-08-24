import { getServerSession } from "next-auth"
import Link from "next/link"
import { options } from "../app/api/auth/[...nextauth]/options"

export default async function Navbar() {
    const session = await getServerSession(options)
    // console.log('navbar', session, "sess
    const login = session?.user ? (<li><Link href="/api/auth/signout">Sign Out</Link></li>) : (<li><Link href="/api/auth/signin">Sign In</Link></li>)

    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/">Home</Link></li>
                {login}

                <li><Link href="/admin">Dashboard</Link></li>
                <li><Link href="/creator">Creator</Link></li>
            </ul>
        </nav>
    )
}

