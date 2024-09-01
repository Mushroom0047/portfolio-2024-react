import imgFooter from '/logo_white.png';
import texts from '../../assets/texts.json';

const Footer = () => {
  const { text } = texts.footer;
  
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
        <p className="roboto text-xs text-white text-center">{ text }</p>
      </div>
      <div className="js-pride-month-gradient"></div>
    </>
  )
}

export default Footer