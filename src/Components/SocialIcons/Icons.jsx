import PropTypes from 'prop-types';

const Icons = ({color}) => {
  const iconsList = [
    {
      src: `https://img.icons8.com/${color}/48/github.png`,
      alt: 'Github icon',
      url: 'https://github.com/Mushroom0047'
    },
    {
      src: `https://img.icons8.com/${color}/48/linkedin.png`,
      alt: 'Linkedin icon',
      url: 'https://www.linkedin.com/in/hector-valdes-m/'
    },
    {
      src: `https://img.icons8.com/${color}/48/instagram-new--v1.png`,
      alt: 'Instagram icon',
      url: 'https://www.instagram.com/mushroom.dev/?hl=es-la'
    },
    {
      src: `https://img.icons8.com/${color}/48/steam.png`,
      alt: 'Steam icon',
      url: 'https://steamcommunity.com/id/mushroom0047/'
    },
  ];

  return (
    <div className="flex gap-6 justify-center">
    {iconsList.map((icon, index) =>(
      <a key={index} href={icon.url} target='blank'>        
        <img 
        className="img-icon"
        src={icon.src} 
        alt={icon.alt} />
      </a>
      ))}
      </div>
  )
}
Icons.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Icons