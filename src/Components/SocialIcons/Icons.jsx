
const Icons = () => {
  const iconsList = [
    {
      src: 'https://img.icons8.com/ffffff/48/github.png',
      alt: 'Github icon',
      url: '#'
    },
    {
      src: 'https://img.icons8.com/ffffff/48/linkedin.png',
      alt: 'Linkedin icon',
      url: '#'
    },
    {
      src: 'https://img.icons8.com/ffffff/48/instagram-new--v1.png',
      alt: 'Instagram icon',
      url: '#'
    },
    {
      src: 'https://img.icons8.com/ffffff/48/steam.png',
      alt: 'Steam icon',
      url: '#'
    },
  ];

  return (
    <div className="flex gap-6 justify-center">
    {iconsList.map((icon, index) =>(
      <a key={index} href={icon.url}>        
        <img 
        className="img-icon"
        src={icon.src} 
        alt={icon.alt} />
      </a>
      ))}
      </div>
  )
}

export default Icons