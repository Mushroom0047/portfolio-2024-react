import Iframe from 'react-iframe';
import Title from '../General/Title';
import Icons from '../SocialIcons/Icons';

const Contact = () => {
  const varTitle = 'CONTACTO';
  const vatSubtitle = 'Si buscas un desarrollo web que destaque y cumpla con tus necesidades, ¡estás en el lugar correcto! Estoy aquí para escucharte y trabajar contigo en cada paso del proceso.';
  return (
    <div id='contacto' className="py-8 bg-cs-grey md:px-16 lg:px-24 xl:px-96">
      <div className="w-full">
        <Title title={varTitle} />
        <p className='text-center pb-4 md:text-left'>{vatSubtitle}</p>
      </div>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full flex flex-row justify-center md:flex-col md:gap-12 md:w-1/3 '>
          <div className='w-full flex flex-col items-center gap-2 md:flex-row '>
            <img
              width="50"
              height="50"
              className='transition-transform hover:scale-125 hover:transition-transform cursor-pointer'
              src="https://img.icons8.com/ios-filled/50/dfac13/address--v1.png"
              alt="address--v1" />
            <div className='text-center lg:text-left pl-3'>
              <h3 className='roboto text-sm font-bold'>Dirección</h3>
              <h4 className='roboto text-xs hover:text-border-dfac cursor-pointer'>
                <a href="https://maps.app.goo.gl/YeCsMEQ1D8QHA6N66" target='blank' rel="noopener noreferrer">
                  Valparaíso, Chile.
                </a>
              </h4>
            </div>
          </div>
          <div className='w-1/3 flex flex-col items-center gap-2 md:flex-row '>
            <img
              width="50"
              height="50"
              className='transition-transform hover:scale-125 hover:transition-transform cursor-pointer'
              src="https://img.icons8.com/ios-filled/50/dfac13/filled-message.png"
              alt="filled-message" />
            <div className='text-center lg:text-left pl-3'>
              <h3 className='roboto text-sm font-bold'>Email</h3>
              <h4 className='roboto text-xs hover:text-border-dfac cursor-pointer'>
                <a href="mailto:hectorvaldesm47@gmail.com" target="_blank" rel="noopener noreferrer">
                  hectorvaldesm47@gmail.com
                </a>
              </h4>
            </div>
          </div>
          <div className='w-full flex flex-col items-center gap-2 md:flex-row '>
            <img
              width="50"
              height="50"
              className='transition-transform hover:scale-125 hover:transition-transform cursor-pointer'
              src="https://img.icons8.com/ios-filled/50/dfac13/smartphone--v1.png"
              alt="smartphone--v1" />
            <div className='text-center lg:text-left pl-3'>
              <h3 className='roboto text-sm font-bold'>Teléfono</h3>
              <h4 className='roboto text-xs hover:text-border-dfac cursor-pointer'>
                <a href="tel:56978442352" target="_blank" rel="noopener noreferrer">
                  +569 7844 2352
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className='w-full py-8 md:w-2/3 '>
          <Iframe
            className='iframe'
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107015.82380423047!2d-71.69344900048361!3d-33.05002947313633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dde3de20cec7%3A0xeb0a3a8cbfe19b76!2sValpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1707949737828!5m2!1ses-419!2scl"
            width="100%"
            height="350"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className='w-full py-8'>
        <Icons color='dfac13' />
      </div>
    </div>
  )
}

export default Contact