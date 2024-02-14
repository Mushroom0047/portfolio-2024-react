import Title from '../General/Title';
import Icons from '../SocialIcons/Icons';

const Contact = () => {
  const varTitle = 'CONTACTO';
  const vatSubtitle = 'asdasd';
  return (
    <div className="py-8 bg-cs-grey">
      <div className="w'full">
        <Title title={varTitle} />
        <p className='text-center pb-4'>{vatSubtitle}</p>
      </div>
      <div className="w-full flex flex-row justify-center">
        <div className='w-1/3 flex flex-col items-center gap-2'>
          <img 
            width="50" 
            height="50" 
            src="https://img.icons8.com/ios-filled/50/dfac13/address--v1.png" 
            alt="address--v1" />
            <h3 className='roboto text-sm font-bold'>Dirección</h3>
            <h4 className='roboto text-xs'>Valparaíso, Chile.</h4>
        </div>
        <div className='w-1/3 flex flex-col items-center gap-2'>
          <img 
            width="50" 
            height="50" 
            src="https://img.icons8.com/ios-filled/50/dfac13/filled-message.png" 
            alt="filled-message" />
            <h3 className='roboto text-sm font-bold'>Email</h3>
            <h4 className='roboto text-xs'>
              hectorvaldesm47@gmail.com
            </h4>
        </div>
        <div className='w-1/3 flex flex-col items-center gap-2'>
          <img 
            width="50" 
            height="50" 
            src="https://img.icons8.com/ios-filled/50/dfac13/smartphone--v1.png" 
            alt="smartphone--v1" />
            <h3 className='roboto text-sm font-bold'>Teléfono</h3>
            <h4 className='roboto text-xs'>
              +569 7844 2352
            </h4>
        </div>
      </div>
      <div className='w-full py-8'>
      <Icons color='dfac13'/>
      </div>
    </div>
  )
}

export default Contact