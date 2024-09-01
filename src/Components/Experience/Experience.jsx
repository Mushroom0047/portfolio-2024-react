import Title from '../General/Title';
import SubTitle from '../General/SubTitle';
import useFetch from '../Hooks/useFetch';
import texts from '../../assets/texts.json';

const Experience = () => {
  let exp = [];
  const { data, error } = useFetch(
    'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/experience?acf_format=standard'
  );

  if(error){ exp = [] }
  if(data && data.length > 0){
    exp = [...data].reverse();
  }

  const { titulo, subtitulo, descripcion } = texts.experience;
  return (
    <div id='experiencia' className="w-full text-left py-8 px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <div className="px-5">
        <Title title={titulo} />
        <SubTitle title={subtitulo} subtitle={descripcion} />
      </div>
      <div className='px-5'>
        {
          exp.map((data, index) => (
            <div key={index} className='flex flex-row flex-wrap py-8 border-b-2'>
              <div className='w-1/2'>
                <h3 className='font-bold oswald text-lg'>{data.title.rendered}</h3>
                <h4>{data.acf.date_of_entry + " - " + ((data.acf.date_of_departure)? data.acf.date_of_departure: "Actual")}</h4>
              </div>
              <div className='w-1/2'>
                <h2 className='text-right oswald font-light text-3xl'>{data.acf.position}</h2>
              </div>
              <div className='w-full py-8'>
                <p>{data.acf.position_description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Experience