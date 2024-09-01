import Title from '../General/Title';
import texts from '../../assets/texts.json';
import useFetch from '../Hooks/useFetch';
import { useEffect, useState } from 'react';
import ProjectsMobile from './ProjectsMobile.jsx';
import ProjectsDesktop from './ProjectsDesktop.jsx';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { titulo, descripcion } = texts.portafolio;

  const [categoryIds, setCategoryIds] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  const { data:categories, error:errCategories, loading:loadingCategories } = useFetch(
    'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/categories?acf_format=standard'
  );

  const { data:projects, error:errProjects, loading:loadingProjects } = useFetch(
    'https://backend.hectorvaldes.dev/wp/wp-json/wp/v2/portfolio?per_page=100'
  );

  //Get publish projects
  useEffect(() => {
    if(projects && projects.length > 0){
      const filterProjects = getPublishProjects(projects);
      setProjectsList(filterProjects);
    }
  }, [projects]);

  //check the screen for mobile o desktop
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Ejecutar en el montaje
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
  
  //Get only the name of categories with post
  useEffect(() => {
    if (categories && categories.length > 0) {
      const filterIds = getFilteredCategoryIds(categories);
      setCategoryIds(filterIds);
    }
  }, [categories])

  //function for filter projects
  const getPublishProjects = (projects) => {
    return projects.filter((project)=>project.status === "publish")
  }

  //function for the filter ids
  const getFilteredCategoryIds = (categories) => {
    return categories
      .filter((category) => category.count > 0)
      .map((category) => ({
        id: category.id,
        title: category.name,
        image: category.acf.icon
      }))
  }

  return (
    <div id='portafolio' className="py-8 px-[5%]">
      <div className="text-center px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]">
        <Title title={titulo} />
        <p>{descripcion}</p>
      </div>
      {isMobile ? (
        <ProjectsMobile idData={categoryIds} projectsData={projectsList}/>
      ): (
        <ProjectsDesktop idData={categoryIds} projectsData={projectsList}/>
      )}
    </div>
  )
}

export default Portfolio;