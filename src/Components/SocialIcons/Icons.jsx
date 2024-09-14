import PropTypes from 'prop-types';


const Icons = ({ color, size, filled }) => {
  const fill = (filled) ? '/ios-filled/' : '/';
  const iconsList = [
    {
      src: `https://img.icons8.com${fill}${color}/48/filled-message.png`,
      alt: 'Envelope icon',
      url: 'mailto:hectorvaldesm47@gmail.com'
    },
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

  return (
    <div
      className="flex gap-6 justify-center"
    >
      {iconsList.map((icon, index) => (
        <a 
          key={index} 
          href={icon.url} 
          target="_blank" 
          rel="noopener noreferrer"          
        >
          <img
            className="img-icon"
            src={icon.src}
            alt={icon.alt}
            width={size}
            height={size}
          />
        </a>        
      ))}
    </div>
  );
}
Icons.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  filled: PropTypes.bool,
}

export default Icons