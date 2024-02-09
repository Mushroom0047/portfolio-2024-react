import React from 'react';
import compromisoLottie from '../../assets/Lottie/handshake-deal.json';
import adaptabilidadLottie from '../../assets/Lottie/people-exchange-arrows.json';
import aprendizajeLottie from '../../assets/Lottie/learn-more-text.json';
import comunicacionLottie from '../../assets/Lottie/consultation.json';
import equipoLottie from '../../assets/Lottie/three-male-avatars.json';
import organizacionLottie from '../../assets/Lottie/noticeboard.json';

const Skills = () => {
    const lotties = [
        { name: 'Compromiso', src: compromisoLottie },
        { name: 'Adaptabilidad', src: adaptabilidadLottie },
        { name: 'Aprendizaje Continuo', src: aprendizajeLottie },
        { name: 'Comunicación', src: comunicacionLottie },
        { name: 'Trabajo en Equipos', src: equipoLottie },
        { name: 'Organización', src: organizacionLottie },
    ];
  return (
    <div class="px-8">
        <h2 class="border-b-4 border-dfac py-4 text-center">HABILIDADES</h2>
        <p class="text-center">{{desc}}</p>
        
        <hr/>
    </div>
  )
}

export default Skills