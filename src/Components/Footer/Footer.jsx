import imgFooter from '/logo_white.png';
const Footer = () => {
  const textFooter = 'PORTAFOLIO HÉCTOR VALDÉS M. | MUSHROOM 🍄 | DESARROLLADO EN REACT';
  
  return (
    <>
      <div className="bg-black py-4 px-2 flex flex-col items-center gap-4">
        <a href="/">
          <img 
            className='transition-transform hover:scale-110 cursor-pointer'
            src={imgFooter} 
            alt="logo footer" 
            width='400'
            height='auto'/>
        </a>
        <p className="roboto text-xs text-white text-center">{textFooter}</p>
      </div>
      <div className="js-pride-month-gradient"></div>
    </>
  )
}

export default Footer