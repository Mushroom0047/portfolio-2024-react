import React from 'react'
import Icons from '../SocialIcons/Icons'

const Banner = () => {
  return (
    <div class="hero-section bg-red-300 w-full">
        <div class="text-center mx-auto container flex flex-col justify-center h-full bg-green-300">
            <h1>Hola, mi nombre es <br />Héctor Valdés M</h1>
            <h2 class="border-y-2 mt-5">Frontend Developer</h2>
            <Icons />
        </div>        
    </div>
  )
}

export default Banner