import { Carousel, IconButton } from '@material-tailwind/react';
import Title from '../General/Title';
import { WordPressProjects } from './Proyectos.js';
import PortfolioCard from './PortfolioCard.jsx';


const Portfolio = () => {
  const varTitle = 'PORTAFOLIO';
  const varSubtitle = 'Explora mi portafolio para descubrir proyectos diversos, desde sitios en WordPress y Shopify hasta desarrollos en HTML. Implemento funcionalidades interactivas con JavaScript y creo emocionantes juegos en Game Maker. Descubre mi enfoque creativo y versátil explorando mi trabajo.';
  return (
    <div className="py-8">
      <div className="text-center px-2">
        <Title title={varTitle} />
        <p>{varSubtitle}</p>
      </div>
      <div className='w-full flex flex-col justify-center py-4'>
      <h3 className="oswald font-medium text-xl px-4 py-4">WordPress</h3>
        <Carousel
          className='py-4 '
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-cs-grey hover:bg-border-dfac hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-cs-grey hover:bg-border-dfac hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {
            WordPressProjects.map((project, index)=>(
              <PortfolioCard key={index} data={project}/>
            ))
          }        
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio;