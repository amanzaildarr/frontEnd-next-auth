"use client"
import { getSession, useSession } from 'next-auth/react'
import React from 'react'

export default function Admin() {
    const {data:session} = useSession();

    // const session2 = getSession({ req });
    return (
        <>
            <div>Admin page</div>
            {JSON.stringify(session?.user)}
            {/* {JSON.stringify(session2)} */}
        </>
    )
}
