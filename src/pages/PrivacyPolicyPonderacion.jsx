import Footer from "../Components/Footer/Footer"
import ScrollTop from "../Components/ScrollTop/ScrollTop"
import logoPonderacion from "../assets/logo-app-ponderacion.png"

export const PrivacyPolicyPonderacion = () => {
    return (
        <>
            <section className='py-5 container mx-auto mb-10'>
                <div className='px-5'>
                    <h1 className='oswald text-4xl text-center'>Política de Privacidad</h1>
                    <h2 className='oswald text-2xl text-center'>Ponderación de Notas</h2>
                    <h3 className='oswald text-l text-center'>
                        <a href="https://hectorvaldes.dev"
                            title="Portafolio de Héctor Valdés"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Portafolio de Héctor Valdés - Proyectos y experiencia">
                            by Mushroom 🍄
                        </a>
                    </h3>
                    <img
                        className="mx-auto"
                        src={logoPonderacion}
                        alt="logo ponderacion"
                        width={200}
                    />
                    <br />
                    <br />
                    <p>Fecha de Vigencia: 11/08/2024</p>
                    <p>Versión: 1.0.0</p>
                    <p>
                Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos y compartimos tu información cuando utilizas nuestra aplicación de Chrome, diseñada para mejorar tu experiencia de cálculo de notas. Al usar nuestra aplicación, aceptas las prácticas descritas en esta Política de Privacidad.
            </p>
            <h2 className="mt-5"><b>Recopilación y Uso de Información</b></h2>
            <ol>
                <li>
                    <b>Permisos de Chrome:</b>
                    <p>Nuestra aplicación utiliza los permisos necesarios para mejorar la funcionalidad y la experiencia del usuario. Estos permisos se utilizan de la siguiente manera:</p>
                    <ul>
                        <li>
                            <b>storage:</b>
                            <p>Almacena datos localmente en tu navegador para ofrecer características como configuraciones personalizadas.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Datos Personales:</b>
                    <p>No recopilamos ni almacenamos información personal identificable a través de nuestra aplicación.</p>
                </li>        
            </ol>
            <h2 className="mt-5"><b>Compartir Información</b></h2>
            <p>No compartimos la información recopilada a través de nuestra aplicación con terceros.</p>
            <h2 className="mt-5"><b>Seguridad de los Datos</b></h2>
            <p>Tomamos medidas para proteger la información recopilada a través de nuestra aplicación y asegurar su seguridad. Sin embargo, ten en cuenta que ningún método de transmisión por internet o de almacenamiento electrónico es completamente seguro, y no podemos garantizar la seguridad absoluta de tus datos.</p>
            <h2 className="mt-5"><b>Cambios en la Política de Privacidad</b></h2>
            <p>Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Recomendamos revisar esta política periódicamente para mantenerse informado sobre cómo estamos protegiendo tu información.</p>
            <h2 className="mt-5"><b>Contacto</b></h2>
            <p>Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de privacidad, 
            no dudes en ponerte en contacto en
                        <a href="mailto:hectorvaldesm47@gmail.com" target="blank"> hectorvaldesm47@gmail.com</a>.</p>
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}
