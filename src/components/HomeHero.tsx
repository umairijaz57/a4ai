import Image from 'next/image'
import React from 'react'

export default function HomeHero() {
  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center py-12">
  <Image 
    src="/masscot/bytebuddyR.png" 
    width={220} 
    height={220} 
    alt="Byte Buddy Robot" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
  <Image 
    src="/masscot/agentvirtual.png" 
    width={220} 
    height={220} 
    alt="Virtual Agent" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
  <Image 
    src="/masscot/cyberninja.png" 
    width={220} 
    height={220} 
    alt="Cyber Ninja" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
  <Image 
    src="/masscot/mathmagic.png" 
    width={220} 
    height={220} 
    alt="Math Magic" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
  <Image 
    src="/masscot/science.png" 
    width={220} 
    height={220} 
    alt="Science Character" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
  <Image 
    src="/masscot/jolly.png" 
    width={220} 
    height={220} 
    alt="Jolly Character" 
    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  />
</div>

  )
}