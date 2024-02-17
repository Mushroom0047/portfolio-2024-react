import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Title from '../General/Title';
import PortfolioCarousel from './PortfolioCarousel.jsx';
import { WordPressProjects, gamesProjects, codeProjects, reactProjects, Extensiones } from './Proyectos.js';
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
      label: "Códigos web",
      value: "codigos",
      content: codeProjects,
    },
    {
      label: "Extensiones",
      value: "extensiones",
      content: Extensiones,
    },
    {
      label: "React",
      value: "react",
      content: reactProjects,
    },
    {
      label: "Videojuegos",
      value: "videojuegos",
      content: gamesProjects,
    },
  ];

  return (
    <div id='portafolio' className="py-8 md:px-16 lg:px-16 xl:px-48">
      <div className="text-center px-2">
        <Title title={varTitle} />
        <p className='md:text-left'>{varSubtitle}</p>
      </div>
      <div className='sm:block md:hidden'>
        {/* PORTAFOLIO MOBILE */}
        <div className='w-full flex flex-col justify-center py-4'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">WordPress</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={WordPressProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Videojuegos Desarrollados</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={gamesProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4'>
          <div className='w-full flex flex-col md:w-1/3 md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Códigos desarrollados</h3>
          </div>
          <div className='w-full md:w-2/3'>
            <PortfolioCarousel projectData={codeProjects} />
          </div>
        </div>
      </div>
      {/* PORTAFOLIO DESKTOP */}
      <div className='xs:hidden sm:block  py-16'>
        <Tabs value="wordpress" orientation="vertical">
          <TabsHeader className="w-32 gap-4">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, content }) => (
              <TabPanel key={value} value={value} className="py-0 flex flex-row justify-between flex-wrap">
                {
                  content.map((values, index) => (
                    <PortfolioCard key={index} data={values} />
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