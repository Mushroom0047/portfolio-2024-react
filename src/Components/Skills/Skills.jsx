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
    const skills = 'Mi enfoque organizado se refleja en la gestión eficiente de tareas y proyectos, garantizando plazos cumplidos. La comunicación clara y efectiva facilita la colaboración con equipos multidisciplinarios. Mi habilidad para adaptarme a entornos dinámicos y aprender rápidamente me permite enfrentar desafíos con resiliencia. Con equilibrio entre habilidades técnicas y blandas, estoy comprometido a llevar cada proyecto al siguiente nivel de éxito y eficiencia.';
     
  return (
    <div className="px-8 border-b-2 text-center bg-cs-grey py-12 md:px-32 lg:px-32 xl:px-64">
        <Title title='HABILIDADES'/>
        <p>{skills}</p>
        <div className='w-full flex flex-row flex-wrap lg:px-16 xl:px-96 2xl:px-32'>
          {
            lotties.map((data, index) =>(
              <div key={index} className='w-1/2 p-12 md:w-1/3 lg:p-8 xl:p-12 '>
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