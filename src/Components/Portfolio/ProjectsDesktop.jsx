import { Spinner, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import PortfolioCard from "./PortfolioCard";

const ProjectsDesktop = ({ idData, projectsData, loadingProjects }) => {
    return (
        <div className='w-full py-16 lg:flex lg:justify-center'>
            <Tabs value="WordPress" className="w-full">
                <TabsHeader className="w-full mb-4">
                    {idData.map(({ title, id, image }) => (
                        <Tab key={id} value={title}>
                            <div className="flex flex-row flex-nowrap items-center gap-2 py-2">
                                <img src={image} alt={title} width={24} />
                                <Typography variant="lead" className="md:text-sm lg:text-md">{title}</Typography>
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {idData.map(({title, id}) => (
                        <TabPanel key={id} value={title}>
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {loadingProjects ? (
                                    <Spinner />
                                ): (
                                    projectsData.filter(project => project.categories.includes(id))
                                    .map((project, index) =>(
                                        <PortfolioCard key={index} data={project} />                                                               
                                    ))
                                )}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}
ProjectsDesktop.propTypes = {
    idData: PropTypes.array.isRequired,
    projectsData: PropTypes.array.isRequired,
    loadingProjects: PropTypes.bool.isRequired
}
export default ProjectsDesktop