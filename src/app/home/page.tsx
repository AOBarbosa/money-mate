import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { SignOut } from '@/components/sign-out'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex h-screen flex-row items-center justify-center space-x-6">
      <Avatar>
        <AvatarImage src={session?.user?.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>{' '}
      <span>Bem vindo {session?.user?.email}!</span>
      <SignOut />
      {!session && redirect('/login')}
    </div>
  )
}
