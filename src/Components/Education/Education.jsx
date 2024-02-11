import Title from "../General/Title"

const Education = () => {
  const informarion = [
    {
      institucion: 'INACAP',
      titulo: 'Analista Programador',
      periodo: '2018 - 2020',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dignissim, metus',
    },
  ]
  const varTitle = 'EDUCACIÓN';
  return (
    <div className="w-full text-left py-8 bg-cs-grey">
      <Title title={varTitle}/>
      <div className='px-5'>
        {
          informarion.map((data, index) => (
            <>
            <div key={index} className='flex flex-row flex-wrap py-8'>
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
            <hr />
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Education