import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import AddProjectForm from './components/AddProjectForm';
import mockData from './data/mockData';

function App() {
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState(mockData);

  const handleAddProject = (newProject) => {
    const maxId = projects.reduce((max, p) => (p.id > max ? p.id : max), 0);
    const projectWithId = { ...newProject, id: maxId + 1 };
    setProjects(prev => [...prev, projectWithId]);
    setShowForm(false);
  };

  return (
    <div className='passport-container'>
      <header className='header'>
        <h1 className='header-name'>Цифровой строительный паспорт</h1>
      </header>

      <main className='main'>
        <div className="controls-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Поиск проекта..."
            aria-label="Поиск проекта"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='add-btn' onClick={() => setShowForm(true)}>+ Добавить новый проект</button>
        </div>

        <ProjectCard
          search={search}
          projects={projects}
          setProjects={setProjects}
        />

        {showForm && (
          <AddProjectForm
            onAddProject={handleAddProject}
            onCancel={() => setShowForm(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
