import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-xl py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-xl border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'bg-exoria-drawer-header text-exoria-black hover:bg-exoria-header active:bg-exoria-header active:text-exoria-black/80',
    white:
      'bg-exoria-white text-cyan-900 hover:bg-exoria-white/90 active:bg-exoria-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-exoria-white hover:bg-gray-900 active:bg-gray-800 active:text-exoria-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button
      className={className}
      style={{ boxShadow: 'var(--shadow-exoria-sm)' }}
      {...props}
    />
  ) : (
    <Link
      className={className}
      style={{ boxShadow: 'var(--shadow-exoria-sm)' }}
      {...props}
    />
  )
}
