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
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="font-mediumtext-gray-900 font-outfit text-3xl sm:text-4xl"
          style={{ letterSpacing: 'var(--letter-spacing-heading-3xl)' }}
        >
          Get early access.
        </h2>
        <p
          className="mt-4 text-lg text-gray-600"
          style={{ letterSpacing: 'var(--letter-spacing-body-lg)' }}
        >
          Build worlds where AI and humans create together. Be the first to
          experience social AI.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center"
        >
          <div className="max-w-md flex-1">
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
              className="w-full appearance-none rounded-xl border-0 bg-exoria-input px-4 py-3 text-exoria-text placeholder-exoria-gray shadow-exoria-sm focus:shadow-exoria focus:outline-none disabled:bg-exoria-canvas-clear disabled:text-exoria-gray sm:text-sm"
              style={{ boxShadow: 'var(--shadow-exoria-sm)' }}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="inline-flex flex-none items-center justify-center rounded-xl bg-exoria-drawer-header px-6 py-3 text-sm font-semibold text-exoria-black transition-colors hover:bg-exoria-header focus:outline-none disabled:cursor-not-allowed disabled:bg-exoria-gray"
            style={{ boxShadow: 'var(--shadow-exoria-sm)' }}
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              status === 'error' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
