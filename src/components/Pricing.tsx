'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Explorer',
    featured: false,
    price: 'Free',
    credits: '100 credits/month',
    description:
      'Perfect for discovering what&rsquo;s possible in social AI creation.',
    button: {
      label: 'Start exploring',
      href: '/register',
    },
    features: [
      'Basic world access',
      'Limited AI interactions',
      'Community worlds only',
      'Basic generation tools',
    ],
    limitations: [
      'No custom AI creation',
      'No private groups',
      'View-only collaboration',
      'Standard AI models',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'World Builder',
    featured: true,
    price: '$20',
    credits: '2,250 credits/month',
    description:
      'Everything you need to build immersive worlds with friends and AI.',
    button: {
      label: 'Build your world',
      href: '/register',
    },
    features: [
      'Create custom AI companions',
      'Advanced generation tools',
      'Private groups & worlds',
      'All AI model access',
      'Spatial audio rooms',
      'Real-time collaboration',
      'Priority support',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
  {
    name: 'Universe Creator',
    featured: false,
    price: '$100',
    credits: '12,500 credits/month',
    description:
      'For serious world builders who need unlimited creative power.',
    button: {
      label: 'Create universes',
      href: '/register',
    },
    features: [
      'Everything in World Builder',
      'Advanced reasoning models',
      'Bulk content generation',
      'Multiple organizations',
      'Custom voice creation',
      'API access (coming soon)',
      'Dedicated support',
    ],
    logomarkClassName: 'fill-purple-500',
  },
]

const addOnPacks = [
  {
    name: 'Quick Boost',
    price: '$5',
    credits: '500 credits',
    description: 'For weekend world-building sessions',
  },
  {
    name: 'Creator Pack',
    price: '$10',
    credits: '1,000 credits',
    description: 'Fuel your regular creative flow',
  },
  {
    name: 'Builder Bundle',
    price: '$25',
    credits: '2,500 credits',
    description: 'Best value for active creators',
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  credits,
  description,
  button,
  features,
  limitations,
  logomarkClassName,
  featured = false,
}: {
  name: string
  price: string
  credits: string
  description: string
  button: {
    label: string
    href: string
  }
  features: Array<string>
  limitations?: Array<string>
  logomarkClassName?: string
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-exoria-white',
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-exoria-white' : 'text-gray-900',
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-exoria-white' : 'text-gray-900',
        )}
      >
        {price}
        <span
          className={clsx(
            'ml-1 text-sm font-normal',
            featured ? 'text-gray-300' : 'text-gray-500',
          )}
        >
          /month
        </span>
      </p>
      <p
        className={clsx(
          'mt-1 text-sm font-medium',
          featured ? 'text-cyan-400' : 'text-cyan-600',
        )}
      >
        {credits}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700',
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-exoria-white' : 'text-cyan-500',
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
          {limitations &&
            limitations.map((limitation) => (
              <li key={limitation} className="flex py-2 opacity-60">
                <svg
                  className="h-6 w-6 flex-none text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="ml-4">{limitation}</span>
              </li>
            ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

function AddOnPack({
  name,
  price,
  credits,
  description,
}: {
  name: string
  price: string
  credits: string
  description: string
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-exoria-white p-6 shadow-sm ring-1 ring-gray-200">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <span className="text-2xl font-bold text-gray-900">{price}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-cyan-600">{credits}</p>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <Button
        href="/register"
        color="gray"
        className="mt-4"
        aria-label={`Purchase ${name} add-on pack`}
      >
        Add Credits
      </Button>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="tracking-tighttext-gray-900 text-3xl font-medium"
          >
            Simple credit-based pricing.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Start building for free. Scale up as your world grows.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>

        {/* Add-on Credit Packs */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h3 className="text-2xl font-medium text-gray-900">
            Need more creative fuel?
          </h3>
          <p className="mt-2 text-gray-600">
            Add-on credit packs that never expire. Perfect for big projects.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {addOnPacks.map((pack) => (
            <AddOnPack key={pack.name} {...pack} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            Credits roll over forever. All plans include community access and
            basic support.
          </p>
        </div>
      </Container>
    </section>
  )
}
