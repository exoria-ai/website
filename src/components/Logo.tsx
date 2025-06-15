import Image from 'next/image'
import appIcon from '../images/appIcon.png'

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
    <div className="flex items-center" {...props}>
      <Logomark width={40} height={40} className="mr-2" />
      <span className="text-xl font-semibold text-gray-900">Pocket</span>
    </div>
  )
}
