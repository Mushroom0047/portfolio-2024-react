import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Title from '../General/Title';
import PortfolioCarousel from './PortfolioCarousel.jsx';
import { WordPressProjects, gamesProjects, codeProjects } from './Proyectos.js';
import PortfolioCard from './PortfolioCard.jsx';



const Portfolio = () => {
  const varTitle = 'PORTAFOLIO';
  const varSubtitle = 'Explora mi portafolio para descubrir proyectos diversos, desde sitios en WordPress y Shopify hasta desarrollos en HTML. Implemento funcionalidades interactivas con JavaScript y creo emocionantes juegos en Game Maker. Descubre mi enfoque creativo y versátil explorando mi trabajo.';

  const data = [
    {
      label: "WordPress",
      value: "wordpress",
      content: WordPressProjects,
    },
    {
      label: "Videojuegos",
      value: "videojuegos",  
      content: gamesProjects,
    },
    {
      label: "Códigos",
      value: "codigos",
      content: codeProjects,
    },
  ];

  return (
    <div className="py-8 md:px-16 lg:px-48">
      <div className="text-center px-2 lg:px-96">
        <Title title={varTitle} />
        <p className='md:text-left'>{varSubtitle}</p>
      </div>
      <div className='md:hidden'>
        <div className='w-full flex flex-col justify-center py-4 md:flex-row'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">WordPress</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={WordPressProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4 md:flex-row'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Videojuegos Desarrollados</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={gamesProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4 md:flex-row'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Códigos desarrollados</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={codeProjects} />
          </div>
        </div>
      </div>
      {/* PORTAFOLIO RESPONSIVE */}
      <div className='sm:hidden md:block py-16'>
      <Tabs value="html" orientation="vertical">
      <TabsHeader className="w-32 gap-4">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, content }) => (
          <TabPanel key={value} value={value} className="py-0 flex flex-row flex-wrap">
            {
              content.map((values, index)=>(
                  <PortfolioCard key={index} data={values}/>
              ))
            }          
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
      </div>
    </div>
  )
}

export default Portfolio;