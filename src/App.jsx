import React, { useState } from 'react'
import ProjectCard from './components/ProjectCard'

function App() {

  const [search, setSearch] = useState('');

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
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className='add-btn'>+ Добавить новый проект</button>
        </div>

        <ProjectCard search={search}/>

      </main>
    </div>
  )
}

export default App
