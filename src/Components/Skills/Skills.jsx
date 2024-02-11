import compromisoLottie from '../../assets/Lottie/handshake-deal.json';
import adaptabilidadLottie from '../../assets/Lottie/people-exchange-arrows.json';
import aprendizajeLottie from '../../assets/Lottie/learn-more-text.json';
import comunicacionLottie from '../../assets/Lottie/consultation.json';
import equipoLottie from '../../assets/Lottie/three-male-avatars.json';
import organizacionLottie from '../../assets/Lottie/noticeboard.json';
import LottieAnim from './LottieAnim';
import Title from '../General/Title';

const Skills = () => {
    const lotties = [
        { name: 'Compromiso', src: compromisoLottie },
        { name: 'Adaptabilidad', src: adaptabilidadLottie },
        { name: 'Aprendizaje Continuo', src: aprendizajeLottie },
        { name: 'Comunicación', src: comunicacionLottie },
        { name: 'Trabajo en Equipos', src: equipoLottie },
        { name: 'Organización', src: organizacionLottie },
    ];
    const skills = 'Soy Analista programador egresado de Inacap con experiencia en desarrollo web. Me especializo en JavaScript, HTML, CSS y en el frameworks React. También tengo experiencia en tecnologías de base de datos como MySQL, así como en herramientas de desarrollo como Git y GitHub.';
     
  return (
    <div className="px-8 text-center bg-cs-grey py-12">
        <Title title='HABILIDADES'/>
        <p>{skills}</p>
        <div className='w-full flex flex-row flex-wrap'>
          {
            lotties.map((data, index) =>(
              <div key={index} className='w-1/2 p-12'>
                <LottieAnim animationData={data.src}/>
                <h3 className='oswald text-md'>{data.name}</h3>
              </div>
            ))
          }
        </div>          
    </div>
  )
}

export default Skills;