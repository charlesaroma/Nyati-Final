import React from 'react'
import FilmHeroCarousels from '../../2-Components/Carousels/FilmHeroCarousels'

const FHeroSection = () => {
  return (
      <section className='flex flex-col justify-center  items-center min-h-[65vh] sm:min-h-max md:min-h-[80vh] sm:h-max xl:min-h-[70vh]'>
          <div className='text-center flex items-center w-full h-full  gap-[0px] mt-10 md:mt-0 sm:py-10 xl:mt-10'>
          <FilmHeroCarousels />
          </div>
      </section>
  )
}

export default FHeroSection