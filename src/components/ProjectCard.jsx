import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ search, projects, setProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  const updateProject = (updatedProject) => {
    setProjects(prev =>
      prev.map(proj => (proj.id === updatedProject.id ? updatedProject : proj))
    );
  };

  return (
    <div className='project-card'>
      {filteredProjects.map(project => (
        <div key={project.id} className='project-info'>
          <div className='project-details'>
            <h3 className='project-name'>{project.name}</h3>
            <ul className="project-list">
              <li>Адрес: {project.address}</li>
              <li>Дата начала строительства: {project.startDate}</li>
              <li>Плановая дата ввода в эксплуатацию: {project.endDate}</li>
              <li>Застройщик: {project.developer}</li>
              <li>Общая площадь здания: {project.area}</li>
              <li>Этажность: {project.floors}</li>
              <li>Количество помещений: {project.units}</li>
            </ul>
            <button
              className='btn-details'
              data-status={project.status}
              onClick={() => openDetails(project)}
            >
              Подробнее о проекте
            </button>
          </div>
          <div className='project-side'>
            <p className='project-status' data-status={project.status}>{project.status}</p>
            <img className='project-img' src={project.image} alt={project.name} />
          </div>
        </div>
      ))}

      {selectedProject && (
        <>
          <div className="modal-backdrop" />
          <ProjectDetails 
            project={selectedProject}
            onClose={closeDetails}
            onUpdate={updateProject}
          />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
