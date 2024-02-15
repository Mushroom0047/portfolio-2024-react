import bootstrap from '../../assets/Logos/bootstrap.png';
import css from '../../assets/Logos/css.png';
import elementor from '../../assets/Logos/elementor.png';
import figma from '../../assets/Logos/figma.png';
import gms from '../../assets/Logos/game-maker-2.png';
import github from '../../assets/Logos/github.png';
import html5 from '../../assets/Logos/html-5.png';
import javascript from '../../assets/Logos/javascript.png';
import mysql from '../../assets/Logos/mysql.png';
import notion from '../../assets/Logos/notion.png';
import php from '../../assets/Logos/php.png';
import python from '../../assets/Logos/python.png';
import react from '../../assets/Logos/react.png';
import sass from '../../assets/Logos/sass.png';
import shopify from '../../assets/Logos/shopify.png';
import tailwind from '../../assets/Logos/tailwind.png';
import woocommerce from '../../assets/Logos/woocommerce.png';
import wordpress from '../../assets/Logos/wordpress.png';

import SubTitle from '../General/SubTitle';

const Knowledge = () => {
  const icons = [
    { src: javascript, alt: 'JavaScript' },
    { src: css, alt: 'CSS' },
    { src: html5, alt: 'HTML' },
    { src: sass, alt: 'Sass' },
    { src: tailwind, alt: 'Tailwind CSS' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: wordpress, alt: 'WordPress' },
    { src: woocommerce, alt: 'Woocommerce' },
    { src: elementor, alt: 'Elementor' },
    { src: shopify, alt: 'Shopify' },
    { src: figma, alt: 'Figma' },
    { src: github, alt: 'Github' },
    { src: mysql, alt: 'MySQL' },
    { src: notion, alt: 'Notion' },
    { src: php, alt: 'PHP' },
    { src: python, alt: 'Python' },
    { src: react, alt: 'React' },
    { src: gms, alt: 'Game Maker Studio 2' },
  ];
  const varTitle = 'Conocimientos';
  const varSubtitle = 'Soy un Frontend Developer apasionado con experiencia en la creación de interfaces intuitivas y atractivas. Transformo conceptos en código, construyendo sitios dinámicos y visualmente impactantes. Desde diseños responsivos hasta la optimización del rendimiento, cada proyecto es una oportunidad para fusionar estética con eficiencia. ¡Hagamos que su presencia en línea sea memorable y efectiva!';
  return (
    <div className="w-full px-5 py-8 bg-cs-grey md:px-16 lg:px-96 lg:py-24">
      <div className='w-full'>
        <SubTitle title={varTitle} subtitle={varSubtitle}/>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-cente">
        {
          icons.map((icon, index) => (
            <div key={index} className='w-1/3 flex justify-center md:w-1/6'>
              <img                
                className='img-icon p-2 cursor-pointer'
                width='80px'
                height='80px'
                src={icon.src}
                alt={icon.alt}
                title={icon.alt} />
            </div>
          ))
        }
      </div>      
    </div>
  )
}

export default Knowledge