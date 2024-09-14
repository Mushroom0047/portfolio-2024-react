import Title from "../General/Title"
import useFetch from '../Hooks/useFetch';
import texts from '../../assets/texts.json';
import { Collapse } from "@material-tailwind/react";
import { useState } from "react";

const Education = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (index) => {
    setOpen((prevIndex) => (prevIndex === index ? null : index))
  }

  let education = [];
  const { data, error } = useFetch(
    'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/education?acf_format=standard'
  );

  if(error){ education = [] }
  if(data && data.length > 0){
    education = [...data].reverse();
  }
  const { titulo } = texts.education;
  return (
    <div id="educacion" className="w-full text-left py-8 bg-cs-grey px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <Title title={ titulo }/>
      <div className='px-5'>
        {
          education.map((data, index) => (
            <div key={index} className='flex flex-row flex-wrap py-8 border-b-2'>
              <div className='w-1/2'>
                <h3 className='font-bold oswald text-lg'>{data.acf.college}</h3>
                <h4>{data.acf.date_of_entry + " - " + ((data.acf.date_of_departure)? data.acf.date_of_departure: "Actual")}</h4>
              </div>
              <div className='w-1/2'>
                <h2 className='text-right oswald font-light text-3xl'>{data.title.rendered}</h2>
              </div>
              <button onClick={() => toggleOpen(index)}>
              {open === index ? "Mostrar menos..." : "Mostrar más..."}
              </button>
              <Collapse open={open === index}>
                <div className='w-full py-8'>
                  <p>{data.acf.position_description}</p>
                </div>              
              </Collapse>
            </div>                      
          ))
        }
      </div>
    </div>
  )
}

export default Education