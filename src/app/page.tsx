import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Home() {
  // useSession()
  const session :any = await getServerSession(options)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
}
  console.log('session:::',session.user)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to home page!!
      </h1>
      <pre>
        {/* {session.user} */}
        "dsmsdm "
      </pre>
    </main>
  )
}
