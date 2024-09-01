import { Card, CardBody, CardFooter, CardHeader, Tooltip } from "@material-tailwind/react"
import PropTypes from 'prop-types';

const PortfolioCard = ({ data }) => {
  const { title, acf, featured_media_src_url } = data;

  const icons = [
    {name: "HTML", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-html.svg"},
    {name: "GMS2", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-gms.svg"},
    {name: "Elementor", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-elementor.svg"},
    {name: "CSS", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-css.svg"},
    {name: "WordPress", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-wordpress.svg"},
    {name: "Chrome", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-chrome.svg"},
    {name: "WooCommerce", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-woocommerce.svg"},
    {name: "Shopify", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-shopify.svg"},
    {name: "React", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-reaccionar-nativo.svg"},
    {name: "Python", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-python.svg"},
    {name: "PHP", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-php.svg"},
    {name: "JavaScript", url: "https://backend.hectorvaldes.dev/wp/wp-content/uploads/2024/08/icons8-javascript.svg"}
  ]
  
  return (
    <Card className="shadow-lg mb-4 sm:mx-auto lg:mx-0 ">
      <CardHeader floated={false} color="blue-gray">
        <img        
          src={featured_media_src_url}
          alt={title.rendered}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3">
          <p className="oswald text-xl font-bold">{title.rendered}</p>
        </div>
        <p className="roboto">{acf.project_description}</p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-1">
          {
            
            icons.filter(icon => acf.technology_used.includes(icon.name))
            .map((icon, index) => (
              <Tooltip 
                key={index}
                content={icon.name} 
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
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
          <a href={acf.url_project} target="blank">VER PROYECTO</a>
        </button>
      </CardFooter>
    </Card>
  )
}
PortfolioCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PortfolioCard