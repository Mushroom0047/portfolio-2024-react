import Icons from '../SocialIcons/Icons'
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero-section w-full">
        <div className="overlay w-full h-full text-center mx-auto flex flex-col justify-around py-44 ">
            <h1 className="oswald font-bold text-5xl text-white">Hola, mi nombre es <br />Héctor Valdés M</h1>
            <div className='w-1/2 mx-auto'>
              <h2 className="font-sans border-y-2 py-2 text-white inline-block">Frontend Developer</h2>
            </div>
            <Icons color='ffffff'/>
        </div>        
    </div>
  )
}

export default Banner