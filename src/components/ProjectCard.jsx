import React from 'react'
import mockData from '../data/mockData';

const ProjectCard = ({ search }) => {

  const filteredProjects = mockData.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase())
);

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
                <button className='btn-details' data-status={project.status}>Подробнее о проекте</button>
              </div>
              <div className='project-side'>
                <p className='project-status' data-status={project.status}>{project.status}</p>
                <img className='project-img' src={project.image} alt={project.name}/>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ProjectCard;