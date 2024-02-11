import Title from '../General/Title';

const Portfolio = () => {
  const varTitle = 'PORTAFOLIO';
  const varSubtitle = 'asdasdasdasd';
  return (
    <div className="py-8">
      <div className="text-center px-2">
        <Title title={varTitle}/>
        <p>{varSubtitle}</p>
      </div>
    </div>
  )
}

export default Portfolio