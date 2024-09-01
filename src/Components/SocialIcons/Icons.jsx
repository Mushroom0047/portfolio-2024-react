import PropTypes from 'prop-types';
import { motion } from 'framer-motion';


const Icons = ({ color, size, filled }) => {
  const fill = (filled) ? '/ios-filled/' : '/';
  const iconsList = [
    {
      src: `https://img.icons8.com${fill}${color}/48/github.png`,
      alt: 'Github icon',
      url: 'https://github.com/Mushroom0047'
    },
    {
      src: `https://img.icons8.com${fill}${color}/48/linkedin.png`,
      alt: 'Linkedin icon',
      url: 'https://www.linkedin.com/in/hector-valdes-m/'
    },
    {
      src: `https://img.icons8.com${fill}${color}/48/steam.png`,
      alt: 'Steam icon',
      url: 'https://steamcommunity.com/id/mushroom0047/'
    },
  ];
   // Definir las variantes de animación
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,  // Defase temporal entre cada hijo
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="flex gap-6 justify-center"
      variants={ containerVariants }
      initial="hidden"
      animate="visible"
    >
      {iconsList.map((icon, index) => (
        <motion.a 
          key={index} 
          href={icon.url} 
          target="_blank" 
          rel="noopener noreferrer"
          variants={itemVariants}  // Aplica las variantes a cada ítem
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <img
            className="img-icon"
            src={icon.src}
            alt={icon.alt}
            width={size}
            height={size}
          />
        </motion.a>        
      ))}
    </motion.div>
  );
}
Icons.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  filled: PropTypes.bool,
}

export default Icons