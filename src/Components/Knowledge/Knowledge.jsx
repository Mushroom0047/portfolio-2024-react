import { Tooltip } from '@material-tailwind/react';
import SubTitle from '../General/SubTitle';
import useFetch from '../Hooks/useFetch';
import texts from '../../assets/texts.json';

const Knowledge = () => {
  let icons = [];
  const {data, error} = useFetch(
    'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/knowledge?acf_format=standard&per_page=100'
  );

  if(error) icons = [];
  if(data && data.length > 0){
    icons = data;
  }

  const { titulo, descripcion } = texts.knowledge;


  return (
    <div id='conocimientos' className="w-full py-8 bg-cs-grey px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <div className='w-full'>
        <SubTitle title={titulo} subtitle={descripcion}/>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center">
        {
          icons.map((icon) => (
            <div key={icon.id} className='w-1/3 flex py-8 justify-center md:w-1/6'>
              <Tooltip
                content={icon.title.rendered}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
              <img                
                className='img-icon p-2 cursor-pointer'
                width='80px'
                height='80px'
                src={icon.acf.knowledge_image}
                alt={icon.title.rendered}
               />
              </Tooltip>
            </div>
          ))
        }
      </div>      
    </div>
  )
}

export default Knowledge