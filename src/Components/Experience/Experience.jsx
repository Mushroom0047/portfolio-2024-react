import Title from '../General/Title';
import SubTitle from '../General/SubTitle';

const Experience = () => {
  const data = [
    {
      empresa: 'Grupo Qs',
      cargo: 'Web Developer',
      periodo: '2022 - Actual',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dignissim, metus',
    },
    {
      empresa: 'DesignSEO Group',
      cargo: 'Programador web',
      periodo: '2021 - 2022',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dignissim, metus',
    },
    {
      empresa: 'Freelancer',
      cargo: 'Desarrollador web',
      periodo: '2022 - Actual',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dignissim, metus',
    },
  ]
  const varTitle = 'EXPERIENCIA';
  const varSubtitle = '3 años de experiencia';
  const varText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam in aptent nascetur maecenas mauris, cum cursusarius enim interdum habitasse. Iaculis morbi gravida id';
  return (
    <div className="w-full text-left py-8">
      <div className="px-5">
        <Title title={varTitle} />
        <SubTitle title={varSubtitle} subtitle={varText} />
      </div>
      <div className='px-5'>
        {
          data.map((data, index) => (
            <>
            <div key={index} className='flex flex-row flex-wrap py-8'>
              <div className='w-1/2'>
                <h3 className='font-bold oswald text-lg'>{data.empresa}</h3>
                <h4>{data.periodo}</h4>
              </div>
              <div className='w-1/2'>
                <h2 className='text-right oswald font-light text-3xl'>{data.cargo}</h2>
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

export default Experience