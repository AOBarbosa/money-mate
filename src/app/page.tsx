import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { SignIn } from '@/components/sign-in'

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
      {session && redirect('/home')}
    </div>
  )
}
