import Title from '../General/Title';
import SubTitle from '../General/SubTitle';

const Experience = () => {
  const data = [
    {
      empresa: 'Grupo Qs',
      cargo: 'Web Developer',
      periodo: '2022 - Actual',
      desc: 'Como Web Developer en Grupo QS, lideré el diseño y desarrollo web centrado en la experiencia del usuario. Me especialicé en la maquetación y mantenimiento de páginas en WordPress, la creación de tiendas online con WooCommerce, y el desarrollo de funcionalidades personalizadas. También contribuí a la optimización SEO on-page de los sitios web.',
    },
    {
      empresa: 'DesignSEO Group',
      cargo: 'Programador web',
      periodo: '2021 - 2022',
      desc: 'Durante mi práctica profesional en DesignSEO, me enfoqué en la maquetación de páginas en WordPress utilizando Elementor y Divi. Contribuí al desarrollo de experiencias web atractivas y funcionales, optimizando la presencia en línea de la empresa.',
    },
    {
      empresa: 'Freelancer',
      cargo: 'Desarrollador web',
      periodo: '2022 - Actual',
      desc: 'Me dedico a desarrollar sitios web y tiendas para emprendedores como freelancer, utilizando tecnologías como WordPress y Shopify. Además de diseño y desarrollo, ofrezco servicios integrales que incluyen mantenimiento, optimización, capacitaciones y consultorías para garantizar un rendimiento óptimo y una presencia efectiva en línea.',
    },
  ]
  const varTitle = 'EXPERIENCIA';
  const varSubtitle = '3 años de experiencia';
  const varText = 'Con más de tres años de experiencia como Frontend Developer, transformo conceptos creativos en interfaces atractivas y eficientes. Desde la implementación de diseños responsivos hasta la optimización del rendimiento, cada proyecto es una oportunidad para fusionar la estética con la funcionalidad. Construyo sitios web dinámicos y visualmente impactantes, haciendo que su presencia en línea sea memorable y efectiva.';
  return (
    <div className="w-full text-left py-8 md:px-16 lg:px-96">
      <div className="px-5">
        <Title title={varTitle} />
        <SubTitle title={varSubtitle} subtitle={varText} />
      </div>
      <div className='px-5'>
        {
          data.map((data, index) => (            
            <div key={index} className='flex flex-row flex-wrap py-8 border-b-2'>
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
          ))
        }
      </div>
    </div>
  )
}

export default Experience