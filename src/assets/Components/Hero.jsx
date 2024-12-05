import React from 'react';


function Hero() {
  return (
    <section className='bg-[url(/18157187.jpg)] bg-no-repeat bg-cover'>
       <div className='text-center h-screen py-16 px-12 space-y-6'>
         <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>Our <span className='text-orange-400 italic'>Nature</span></h1>
         <h5 className='text-lg md:text-xl lg:text-3xl text-green-400 font-semibold italic'>Freash Air Need Our Every Person</h5>
         <p className='text-sm md:text-md lg:text-xl text-gray-400 max-w-xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque necessitatibus corrupti amet dolorem ipsum rerum tenetur iure, eveniet maiores minima.</p>
         <button className='bg-indigo-600 px-4 py-1 rounded-md text-white font-bold hover:bg-indigo-700 hover:text-black transition duration-300'>View nature</button>
       </div>
    </section>
  )
}

export default Hero;