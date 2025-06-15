import Image from 'next/image'
import appIcon from '../images/exoria_logo.png'

export function Logomark(
  props: Omit<React.ComponentPropsWithoutRef<'div'>, 'width' | 'height'> & {
    width?: number
    height?: number
  },
) {
  const { width = 40, height = 40, ...rest } = props
  return (
    <div {...rest}>
      <Image src={appIcon} alt="Exoria Logo" width={width} height={height} />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex flex-col items-center py-2" {...props}>
      <Logomark width={72} height={72} className="hidden lg:block" />
      <span className="font-outfit text-xl font-semibold text-exoria-white lg:mt-1 lg:text-sm">
        EXORIA
      </span>
    </div>
  )
}
