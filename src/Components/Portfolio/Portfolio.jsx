import React from 'react';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import Title from '../General/Title';
import PortfolioCarousel from './PortfolioCarousel.jsx';
import { WordPressProjects, gamesProjects, codeProjects, reactProjects, Extensiones } from './Proyectos.js';
import PortfolioCard from './PortfolioCard.jsx';

import jsIcon from '../../assets/svgIcons/icons8-javascript.svg';
import wpIcon from '../../assets/svgIcons/icons8-wordpress.svg';
import reactIcon from '../../assets/svgIcons/icons8-reaccionar-nativo.svg';
import gmsIcon from '../../assets/svgIcons/icons8-gms.svg';
import extIcon from '../../assets/svgIcons/icons8-chrome.svg';


const Portfolio = () => {
  const varTitle = 'PORTAFOLIO';
  const varSubtitle = 'Explora mi portafolio para descubrir proyectos diversos, desde sitios en WordPress y Shopify hasta desarrollos en HTML. Implemento funcionalidades interactivas con JavaScript y creo emocionantes juegos en Game Maker. Descubre mi enfoque creativo y versátil explorando mi trabajo.';

  const data = [
    {
      label: "WordPress",
      value: "wordpress",
      content: WordPressProjects,
      icon: wpIcon
    },
    {
      label: "Proyectos web",
      value: "proyectos",
      content: codeProjects,
      icon: jsIcon
    },
    {
      label: "Extensiones",
      value: "extensiones",
      content: Extensiones,
      icon: extIcon
    },
    {
      label: "React",
      value: "react",
      content: reactProjects,
      icon: reactIcon
    },
    {
      label: "Videojuegos",
      value: "videojuegos",
      content: gamesProjects,
      icon: gmsIcon
    },
  ];

  return (
    <div id='portafolio' className="py-8 px-[5%]">
      <div className="text-center px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
        <Title title={varTitle} />
        <p>{varSubtitle}</p>
      </div>
      <div className='sm:block lg:hidden'>
        {/* PORTAFOLIO MOBILE */}
        <div className='w-full py-4'>
          <div className='w-full flex flex-col md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">WordPress</h3>
          </div>
          <div className='w-full flex justify-center'>
            <PortfolioCarousel projectData={WordPressProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4'>
          <div className='w-full flex flex-col md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Videojuegos Desarrollados</h3>
          </div>
          <div className='w-full'>
            <PortfolioCarousel projectData={gamesProjects} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-4'>
          <div className='w-full flex flex-col md:justify-center'>
            <h3 className="oswald font-medium text-xl px-4 py-4">Códigos desarrollados</h3>
          </div>
          <div className='w-full'>
            <PortfolioCarousel projectData={codeProjects} />
          </div>
        </div>
      </div>
      {/* PORTAFOLIO DESKTOP */}
      <div className='w-full py-16 md:hidden d-none lg:flex lg:justify-center'>
        <Tabs value="wordpress" className='w-full'>
          <TabsHeader className="w-full mb-4">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className='flex flex-row flex-nowrap items-center gap-2 py-2'>
                  <img src={icon} alt={label} width={24}/>
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, content }) => (
              <TabPanel key={value} value={value} className="py-0 grid grid-cols-4 sm:gap-3 gap-6 sm:grid-cols-3">
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