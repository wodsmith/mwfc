'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface Sponsor {
  name: string
  logo: string
}

const sponsors: Sponsor[] = [
  { name: 'Heavy Handed', logo: '/brands/heavy-handed.svg' },
  { name: 'Reign', logo: '/brands/reign.svg' },
  { name: 'ProPath Financial', logo: '/brands/pro-path-financial.svg' },
  { name: 'Advanced Mobile IV', logo: '/brands/advanced-mobile-iv.svg' },
  { name: 'Gymreapers', logo: '/brands/gymreapers.svg' },
  { name: 'Scheels', logo: '/brands/scheels.svg' },
  { name: 'RXSG', logo: '/brands/rxsg.svg' },
  { name: 'Strong Coffee Company', logo: '/brands/strong-coffee.svg' },
  { name: 'Nutrishop', logo: '/brands/nutrishop.svg' },
  { name: 'HGR+CBD', logo: '/brands/hgr-cbd.svg' },
  { name: 'Linear', logo: '/brands/linear.svg' },
  { name: 'Restore Hyper Wellness', logo: '/brands/restore-hyper-wellness.svg' },
  { name: 'TYR', logo: '/brands/tyr.svg' },
  { name: 'U.S. Army', logo: '/brands/us-army.svg' },
]

export default function SponsorBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPos += scrollSpeed

      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPos}px)`

        const itemWidth = scrollContainer.scrollWidth / 3
        if (scrollPos >= itemWidth) {
          scrollPos = 0
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#326549' }}>
      <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center">
        <div className="w-full max-w-[66.666%] overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center"
            style={{ willChange: 'transform' }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex items-center justify-center px-8 min-w-[200px] sm:min-w-[250px] md:min-w-[300px]"
              >
                <div className="relative h-12 sm:h-14 md:h-16 w-32 sm:w-40 md:w-48">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    style={{
                      filter: 'brightness(0) invert(1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}