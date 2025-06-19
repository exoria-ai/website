import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <nav className="flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/investor-relations"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Investor Relations
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Help Center
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
