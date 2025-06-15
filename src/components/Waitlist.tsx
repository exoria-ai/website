'use client'

import { useState } from 'react'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    // The API URL must be set in your environment variables.
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (!apiUrl) {
      console.error('Waitlist.tsx: NEXT_PUBLIC_API_URL is not set.')
      setStatus('error')
      setMessage('Configuration error. Please contact support.')
      return
    }

    try {
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_address: email }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Use the error message from the API if available
        throw new Error(
          data.details?.errors?.[0]?.message ||
            data.error ||
            'Something went wrong.',
        )
      }

      setStatus('success')
      setMessage("Thanks for joining! We'll be in touch soon.")
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.',
      )
    }
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Get early access.
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Characters that actually feel real. Be the first to build worlds with
          Exoria.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex-1">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/10"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none disabled:opacity-50 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              status === 'error'
                ? 'text-red-600 dark:text-red-400'
                : 'text-green-600 dark:text-green-400'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
