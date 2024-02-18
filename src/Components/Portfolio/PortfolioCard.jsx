import { Card, CardBody, CardFooter, CardHeader, Tooltip } from "@material-tailwind/react"
import PropTypes from 'prop-types';

const PortfolioCard = ({ data }) => {
  const { title, desc, urlImg, link, icons } = data;
  return (
    <Card className="mx-auto max-w-[22rem] shadow-lg mb-4 sm:w-full sm:max-w-[20rem]">
      <CardHeader floated={false} color="blue-gray">
        <img        
          src={urlImg}
          alt={title}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <h5 className="oswald text-lg">{title}</h5>
        </div>
        <p className="roboto">{desc}</p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-1">
          {
            icons?.map((icon, index) => (
              <Tooltip content={icon.name} key={index}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <img 
                    src={icon.url} 
                    alt={icon.name} 
                    width='25'
                    height='25'/>
                </span>
              </Tooltip>
            ))
          }
        </div>
      </CardBody>
      <CardFooter className="pt-3 flex justify-center">
        <button className="text-center p-2 border-solid border-border-dfac border-2 bg-white hover:bg-border-dfac transition-colors hover:transition-colors font-bold oswald text-sm hover:text-white">
          <a href={link} target="blank">VER PROYECTO</a>
        </button>
      </CardFooter>
    </Card>
  )
}
PortfolioCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PortfolioCard