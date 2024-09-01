import compromisoLottie from '../../assets/Lottie/handshake-deal.json';
import adaptabilidadLottie from '../../assets/Lottie/people-exchange-arrows.json';
import aprendizajeLottie from '../../assets/Lottie/learn-more-text.json';
import comunicacionLottie from '../../assets/Lottie/consultation.json';
import equipoLottie from '../../assets/Lottie/three-male-avatars.json';
import organizacionLottie from '../../assets/Lottie/noticeboard.json';
import LottieAnim from './LottieAnim';
import Title from '../General/Title';
import texts from '../../assets/texts.json';

const Skills = () => {
    const lotties = [
        { name: 'Compromiso', src: compromisoLottie },
        { name: 'Adaptabilidad', src: adaptabilidadLottie },
        { name: 'Aprendizaje Continuo', src: aprendizajeLottie },
        { name: 'Comunicación', src: comunicacionLottie },
        { name: 'Trabajo en Equipos', src: equipoLottie },
        { name: 'Organización', src: organizacionLottie },
    ];
    const { titulo, descripcion } = texts.skills;
     
  return (
    <div id='habilidades' className="border-b-2 text-center bg-cs-grey py-12 px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
        <Title title={titulo}/>
        <p>{descripcion}</p>
        <div className='w-full flex flex-row flex-wrap mt-5'>
          {
            lotties.map((data, index) =>(
              <div key={index} className='flex flex-col items-center w-1/2 pb-8 px-[10%] md:px-[8%] lg:px-[10%] md:w-1/3 lg:w-1/3 '>
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