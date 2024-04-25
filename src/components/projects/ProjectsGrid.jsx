import { useContext } from 'react';

import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectsGrid = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section className='py-5 sm:py-10 mt-5 sm:mt-16'>
      <div className='text-center'>
        <p className='font-general-medium text-2xl sm:text-4xl mb-10 text-ternary-dark dark:text-ternary-light'>
          Selected Projects
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10'>
        {projects.map((project) => (
          <ProjectSingle
            title={project.title}
            category={project.category}
            image={project.img}
            sourceCode={project.sourceCode}
            livePreview={project.livePreview}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
