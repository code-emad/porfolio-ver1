import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="home">
        <div>
            <div>
                <Image src="/headshot.png" alt="" width={300} height={300}></Image>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default HeroSection