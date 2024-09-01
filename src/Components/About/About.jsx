import Title from '../General/Title';
import SubTitle from '../General/SubTitle';
import Signature from '../../assets/firma.webp';
import useFetch from "../Hooks/useFetch";
import texts from '../../assets/texts.json';


const About = () => {
    const { nombre, email, fechaNacimiento, direccion, nacionalidad, titulo, subtitulo, perfil, descargar } = texts.about;
    let linkCv = null;

    const { data, error } = useFetch(
        'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/updated-resume?acf_format=standard'
    );
    if (error) { linkCv = '#' }
    if (data && data.length > 0) {
        linkCv = data[0].acf.cv.url;
    }

    return (
        <div id='sobre-mi' className="w-full h-full flex flex-row py-8 md:px-[2%] lg:px-[10%] xl:px-[15%]">
            <div className='w-full md:w-1/2'>
                <div className="w-full flex flex-col justify-center">
                    <Title title={titulo} />
                    <table className="w-full">
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
                <div className="px-5 py-8">
                    <SubTitle title={subtitulo} subtitle={perfil} />
                    <div className="flex justify-center py-8">
                        <button className="text-center p-4 border-solid border-border-dfac border-4 bg-white hover:bg-border-dfac transition-colors hover:transition-colors font-bold oswald hover:text-white">
                            <a href={linkCv} target='blank'>
                                {descargar}
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