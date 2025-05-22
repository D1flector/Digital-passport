import React from 'react'
import ProjectCard from './components/ProjectCard'

function App() {
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
          />
          <button className='add-btn'>+ Добавить новый проект</button>
        </div>

        <ProjectCard />

      </main>
    </div>
  )
}

export default App
