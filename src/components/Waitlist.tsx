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
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          Get early access.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Characters that actually feel real. Be the first to build worlds with
          Exoria.
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
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="inline-flex flex-none items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
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
