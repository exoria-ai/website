'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'

import { Container } from '@/components/Container'

// Import all roleplay images using dynamic imports
import roleplay01 from '@/images/roleplay/roleplay_01.webp'
import roleplay02 from '@/images/roleplay/roleplay_02.webp'
import roleplay03 from '@/images/roleplay/roleplay_03.webp'
import roleplay04 from '@/images/roleplay/roleplay_04.webp'
import roleplay05 from '@/images/roleplay/roleplay_05.webp'
import roleplay06 from '@/images/roleplay/roleplay_06.webp'
import roleplay07 from '@/images/roleplay/roleplay_07.webp'
import roleplay08 from '@/images/roleplay/roleplay_08.webp'
import roleplay09 from '@/images/roleplay/roleplay_09.webp'
import roleplay10 from '@/images/roleplay/roleplay_10.webp'
import roleplay11 from '@/images/roleplay/roleplay_11.webp'
import roleplay12 from '@/images/roleplay/roleplay_12.webp'
import roleplay13 from '@/images/roleplay/roleplay_13.webp'
import roleplay14 from '@/images/roleplay/roleplay_14.webp'
import roleplay15 from '@/images/roleplay/roleplay_15.webp'
import roleplay16 from '@/images/roleplay/roleplay_16.webp'
import roleplay17 from '@/images/roleplay/roleplay_17.webp'
import roleplay18 from '@/images/roleplay/roleplay_18.webp'
import roleplay19 from '@/images/roleplay/roleplay_19.webp'
import roleplay20 from '@/images/roleplay/roleplay_20.webp'
import roleplay21 from '@/images/roleplay/roleplay_21.webp'
import roleplay22 from '@/images/roleplay/roleplay_22.webp'
import roleplay23 from '@/images/roleplay/roleplay_23.webp'
import roleplay24 from '@/images/roleplay/roleplay_24.webp'
import roleplay25 from '@/images/roleplay/roleplay_25.webp'
import roleplay26 from '@/images/roleplay/roleplay_26.webp'
import roleplay27 from '@/images/roleplay/roleplay_27.webp'
import roleplay28 from '@/images/roleplay/roleplay_28.webp'
import roleplay29 from '@/images/roleplay/roleplay_29.webp'
import roleplay30 from '@/images/roleplay/roleplay_30.webp'
import roleplay31 from '@/images/roleplay/roleplay_31.webp'
import roleplay32 from '@/images/roleplay/roleplay_32.webp'
import roleplay33 from '@/images/roleplay/roleplay_33.webp'
import roleplay34 from '@/images/roleplay/roleplay_34.webp'
import roleplay35 from '@/images/roleplay/roleplay_35.webp'
import roleplay36 from '@/images/roleplay/roleplay_36.webp'
import roleplay37 from '@/images/roleplay/roleplay_37.webp'
import roleplay38 from '@/images/roleplay/roleplay_38.webp'
import roleplay39 from '@/images/roleplay/roleplay_39.webp'
import roleplay40 from '@/images/roleplay/roleplay_40.webp'
import roleplay41 from '@/images/roleplay/roleplay_41.webp'
import roleplay42 from '@/images/roleplay/roleplay_42.webp'
import roleplay43 from '@/images/roleplay/roleplay_43.webp'
import roleplay44 from '@/images/roleplay/roleplay_44.webp'

const roleplayImages = [
  roleplay01,
  roleplay02,
  roleplay03,
  roleplay04,
  roleplay05,
  roleplay06,
  roleplay07,
  roleplay08,
  roleplay09,
  roleplay10,
  roleplay11,
  roleplay12,
  roleplay13,
  roleplay14,
  roleplay15,
  roleplay16,
  roleplay17,
  roleplay18,
  roleplay19,
  roleplay20,
  roleplay21,
  roleplay22,
  roleplay23,
  roleplay24,
  roleplay25,
  roleplay26,
  roleplay27,
  roleplay28,
  roleplay29,
  roleplay30,
  roleplay31,
  roleplay32,
  roleplay33,
  roleplay34,
  roleplay35,
  roleplay36,
  roleplay37,
  roleplay38,
  roleplay39,
  roleplay40,
  roleplay41,
  roleplay42,
  roleplay43,
  roleplay44,
]

function RoleplayImage({
  src,
  alt,
  className,
  ...props
}: {
  src: StaticImageData
  alt: string
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'src' | 'alt'>) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <div
      className={clsx(
        'animate-fade-in overflow-hidden rounded-2xl opacity-0 shadow-lg shadow-gray-900/10',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="h-auto w-full object-cover"
      />
    </div>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ImageColumn({
  images,
  className,
  imageClassName,
  msPerPixel = 0,
}: {
  images: Array<StaticImageData>
  className?: string
  imageClassName?: (imageIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {images.concat(images).map((imageSrc, imageIndex) => (
        <RoleplayImage
          key={imageIndex}
          src={imageSrc}
          alt={`Roleplay character ${imageIndex + 1}`}
          aria-hidden={imageIndex >= images.length}
          className={imageClassName?.(imageIndex % images.length)}
        />
      ))}
    </div>
  )
}

function ImageGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(roleplayImages, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ImageColumn
            images={[...column1, ...column3.flat(), ...column2]}
            imageClassName={(imageIndex) =>
              clsx(
                imageIndex >= column1.length + column3[0].length && 'md:hidden',
                imageIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ImageColumn
            images={[...column2, ...column3[1]]}
            className="hidden md:block"
            imageClassName={(imageIndex) =>
              imageIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ImageColumn
            images={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-exoria-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-exoria-background" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="gallery-title"
          className="font-display text-3xl font-medium tracking-tight text-exoria-text sm:text-center"
        >
          Bring any character to life.
        </h2>
        <p className="mt-2 text-lg text-exoria-gray sm:text-center">
          Create and interact with unlimited AI characters in immersive roleplay
          scenarios.
        </p>
        <ImageGrid />
      </Container>
    </section>
  )
}
