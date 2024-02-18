import Title from '../General/Title';
import SubTitle from '../General/SubTitle';
import Signature from '../../assets/firma.webp';
import cv from '../../assets/Hector Valdes M cv v02-2024.pdf';

const About = () => {
    const { nombre, email, fechaNacimiento, direccion, nacionalidad } = {
        nombre: 'Héctor Valdés M.',
        email: 'hectorvaldesm47@gmail.com',
        fechaNacimiento: '16 Mayo 1995',
        direccion: 'Valparaíso, Chile',
        nacionalidad: 'Chilena',
    }
    const perfil = 'Estoy comprometido a crear productos digitales de calidad que sean fáciles de usar y ofrezcan la mejor experiencia para los usuarios. Siempre estoy aprendiendo nuevas tecnologías y me aseguro de estar al tanto de los últimos avances en el desarrollo web.';
    const linkCv = cv;

    return (
        <div id='sobre-mi' className="w-full h-full flex flex-row py-8 md:px-[2%] lg:px-[10%] xl:px-[15%]">
            <div className='w-full md:w-1/2'>
                <div className="w-full flex flex-col justify-center">
                    <div className="px-5">
                        <Title title='SOBRE MÍ' />
                        <table className="w-full">
                            <tr className="border-b-2">
                                <td className="py-3">Nombre:</td>
                                <td className="py-3">{nombre}</td>
                            </tr>
                            <tr className="border-b-2 py-1">
                                <td className="py-3">Email:</td>
                                <td className="py-3">{email}</td>
                            </tr>
                            <tr className="border-b-2 py-1">
                                <td className="py-3">Fecha nacimiento:</td>
                                <td className="py-3">{fechaNacimiento}</td>
                            </tr>
                            <tr className="border-b-2 py-1">
                                <td className="py-3">Dirección:</td>
                                <td className="py-3">{direccion}</td>
                            </tr>
                            <tr className="border-b-2 py-1">
                                <td className="py-3">Nacionalidad:</td>
                                <td className="py-3">{nacionalidad}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="px-5 py-8">
                    <SubTitle title='Perfil profesional' subtitle={perfil} />
                    <div className="flex justify-center py-8">
                        <button className="text-center p-4 border-solid border-border-dfac border-4 bg-white hover:bg-border-dfac transition-colors hover:transition-colors font-bold oswald hover:text-white">
                            <a href={linkCv} target='blank'>
                                DESCARGAR CURRICULUM EN PDF
                            </a>
                        </button>
                    </div>
                    <div className='signature flex flex-row justify-center'>
                        <img
                            src={Signature}
                            alt="signature-hector-valdes-dev"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className='bg-image-me sm:hidden md:block md:w-1/2'>                
            </div>
        </div>
    )
}

export default About