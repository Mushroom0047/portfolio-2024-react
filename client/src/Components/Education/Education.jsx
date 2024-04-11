import Title from "../General/Title"

const Education = () => {
  const informarion = [
    {
      institucion: 'INACAP',
      titulo: 'Analista Programador',
      periodo: '2018 - 2020',
      desc: 'Durante mi formación como Analista Programador en Inacap, aprendí un amplio vocabulario y obtuve comprensión de los términos fundamentales en el mundo de la programación. Aprendí el diseño de algoritmos, desarrollo de aplicaciones y bases de datos, lo que me ha dotado de habilidades esenciales para enfrentar desafíos en el campo de la tecnología de la información.',
    },
    {
      institucion: 'UDEMY',
      titulo: 'Desarrollo web HTML, CSS y JS',
      periodo: '2021',
      desc: 'Adquirí conocimientos autodidactas en desarrollo web a través de Udemy, donde aprendí HTML, CSS y JavaScript. Estos cursos me proporcionaron una sólida comprensión de las tecnologías fundamentales para la creación de sitios web interactivos y atractivos.',
    },
  ]
  const varTitle = 'EDUCACIÓN';
  return (
    <div id="educacion" className="w-full text-left py-8 bg-cs-grey px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <Title title={varTitle}/>
      <div className='px-5'>
        {
          informarion.map((data, index) => (
            <div key={index} className='flex flex-row flex-wrap py-8 border-b-2'>
              <div className='w-1/2'>
                <h3 className='font-bold oswald text-lg'>{data.institucion}</h3>
                <h4>{data.periodo}</h4>
              </div>
              <div className='w-1/2'>
                <h2 className='text-right oswald font-light text-3xl'>{data.titulo}</h2>
              </div>
              <div className='w-full py-8'>
                <p>{data.desc}</p>
              </div>              
            </div>                      
          ))
        }
      </div>
    </div>
  )
}

export default Education