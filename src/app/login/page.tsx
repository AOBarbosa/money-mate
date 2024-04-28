import { PiggyBank } from 'lucide-react'

import { SignInForm } from './_components/sign-in-form'

export default function Login() {
  return (
    <main className="grid h-screen grid-cols-2 items-center justify-center bg-primary-foreground">
      <div className="h-full p-5">
        <div className="flex h-full flex-col items-start justify-between rounded bg-card p-8">
          <div className="flex items-center space-x-3 font-semibold">
            <PiggyBank className="size-8" />

            <span className="text-2xl">money mate</span>
          </div>

          <footer className="text-xs text-muted-foreground">
            Seu painel de finanças pessoais &copy; money mate - 2024
          </footer>
        </div>
      </div>

      <div>
        <SignInForm />
      </div>
    </main>
  )
}
