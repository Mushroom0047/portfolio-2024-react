import React from 'react'

const Experience = () => {
    const data = [
        {
            empresa: 'Grupo Qs',
            cargo: 'Web Developer',
            periodo: '2022 - Actual',
            desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dignissim, metus',
        }
    ]
  return (
    <div class="w-full text-left bg-yellow-300">
    <div class="px-5">
        <h2 class="border-b-4 border-dfac py-4 text-center">EXPERIENCIA</h2>
        <h3>3 años de experiencia</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam in aptent nascetur maecenas mauris, cum cursus 
            varius enim interdum habitasse. Iaculis morbi gravida id </p>
    </div>
</div>
  )
}

export default Experience