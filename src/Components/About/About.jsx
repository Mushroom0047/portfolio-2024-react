import Title from '../General/Title';
import SubTitle from '../General/SubTitle';

const About = () => {
    const {nombre, email, fechaNacimiento, direccion, nacionalidad} = {
            nombre: 'Héctor Valdés M.',
            email: 'hectorvaldesm47@gmail.com',
            fechaNacimiento: '16 Mayo 1995',
            direccion: 'Valparaíso, Chile',
            nacionalidad: 'Chilena',
        }
    const perfil = 'Estoy comprometido a crear productos digitales de calidad que sean fáciles de usar y ofrezcan la mejor experiencia para los usuarios. Siempre estoy aprendiendo nuevas tecnologías y me aseguro de estar al tanto de los últimos avances en el desarrollo web.';
    const linkCv = '#';
    
  return (
    <div className="h-full flex flex-col py-8">
        <div className="w-full flex flex-col justify-center">            
            <div className="px-5">
                <Title title='SOBRE MÍ'/>
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
            <SubTitle title='Perfil profesional' subtitle={perfil}/>
            <div className="flex justify-center py-8">
                <button className="text-center p-4 border-solid border-border-dfac border-4 bg-white hover:bg-border-dfac transition-colors hover:transition-colors font-bold oswald hover:text-white">
                    <a href={linkCv}>DESCARGAR CURRICULUM EN PDF</a>
                </button>
            </div>
        </div>
        <div className="w-full ">
            <img src="https://via.placeholder.com/800x600"/>
        </div>
    </div>
  )
}

export default About