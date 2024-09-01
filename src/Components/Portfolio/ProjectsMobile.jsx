import { Carousel, IconButton, Spinner, Typography } from "@material-tailwind/react";
import PortfolioCard from "./PortfolioCard";
import PropTypes from 'prop-types';

const ProjectsMobile = ({ idData, projectsData, loadingProjects }) => {
    return (
        <div className='sm:block'>
            {idData.map(({ id, title }) => (
                <div key={id} className='w-full flex flex-col justify-center py-4'>
                    <div className='w-full flex flex-col md:justify-center'>
                        <Typography variant="h3">{title}</Typography>
                    </div>
                    <div className='w-full'>
                        <Carousel
                            loop={true}
                            className='py-4'
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-border-dfac" : "w-4 bg-gray-300"
                                                }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="black"
                                    size="lg"
                                    onClick={handlePrev}
                                    className="!absolute top-2/4 left-4 -translate-y-36 bg-cs-grey hover:bg-border-dfac hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    color="black"
                                    size="lg"
                                    onClick={handleNext}
                                    className="!absolute top-2/4 right-4 -translate-y-36 bg-cs-grey hover:bg-border-dfac hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </IconButton>
                            )}
                        >
                            {
                                loadingProjects ?(
                                    <Spinner />
                                ):(
                                    projectsData
                                        .filter(project => project.categories.includes(id))
                                        .map((project, index) => (
                                            <PortfolioCard key={index} data={project} />
                                        ))
                                )
                            }
                        </Carousel>
                    </div>
                </div>
            ))}
        </div>
    );
};

ProjectsMobile.propTypes = {
    idData: PropTypes.array.isRequired,
    projectsData: PropTypes.array.isRequired,
    loadingProjects: PropTypes.bool.isRequired,
};

export default ProjectsMobile;
