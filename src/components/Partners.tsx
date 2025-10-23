import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Patners() {
  return (
    //  <Marquee play pauseOnHover>        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center p-6">
  <Image
    src="/partners/ncls.png"
    alt="ncls"
    width={200}
    height={200}
    className="object-contain "
  />
  <Image
    src="/partners/seecs.jpg"
    alt="seecs"
    width={200}
    height={200}
    className="object-contain "
  />
  <Image
    src="/partners/westmind.jpg"
    alt="westmind"
    width={200}
    height={200}
    className="object-contain "
  />
  <Image
    src="/partners/fde.jpg"
    alt="fde"
    width={200}
    height={200}
    className="object-contain "
  />
</div>

  // </Marquee>
  )
}
