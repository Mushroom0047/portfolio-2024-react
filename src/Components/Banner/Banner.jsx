import Icons from '../SocialIcons/Icons'
import './Banner.css';
import { motion } from "framer-motion"
import texts from '../../assets/texts.json';

const Banner = () => {
  const { titulo, titulo2, subtitulo } = texts.banner;
  return (
    <div id='inicio' className="hero-section w-full">
      <div className='overlay w-full h-full'>
      <motion.div 
        className="w-full h-full text-center mx-auto flex flex-col justify-around py-44 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
        >
        <h1 className="oswald font-bold text-5xl text-white">{titulo}<br/>{titulo2}</h1>
        <div className='w-1/2 mx-auto'>
          <h2 className="font-sans text-2xl border-y-2 py-2 text-white inline-block">{subtitulo}</h2>
        </div>
        <Icons color='ffffff' />
      </motion.div>
      </div>
    </div>
  )
}

export default Banner