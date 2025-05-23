import React, { useState, useEffect } from 'react';
import '../css/modal.css';

const ProjectDetails = ({ project, onClose, onUpdate }) => {
  const [localProject, setLocalProject] = useState({ ...project });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleStatusChange = (event) => {
    setLocalProject(prev => ({ ...prev, status: event.target.value }));
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newDocs = Array.from(files).map(file => file.name);

    setLocalProject(prev => ({
      ...prev,
      documents: [...prev.documents, ...newDocs]
    }));
  };

  const handleDeleteDocument = (doc) => {
    setLocalProject(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d !== doc)
    }));
  };

  const handleSave = () => {
    onUpdate(localProject);
    onClose();
  };

  return (
    <div className="project-details-modal">
      <button onClick={onClose} className="close-btn">✖</button>

      <h2>{localProject.name}</h2>
      <p><b>Адрес:</b> {localProject.address}</p>
      <p><b>Дата начала строительства:</b> {localProject.startDate}</p>
      <p><b>Плановая дата ввода:</b> {localProject.endDate}</p>
      <p><b>Застройщик:</b> {localProject.developer}</p>
      <p><b>Площадь:</b> {localProject.area}</p>
      <p><b>Этажность:</b> {localProject.floors}</p>
      <p><b>Количество помещений:</b> {localProject.units}</p>
      <p><b>Материалы:</b> {localProject.materials}</p>

      {localProject.photos && localProject.photos.length > 0 && (
        <div className="photos-section">
          <b>Фото проекта:</b>
          <div className="photo-grid">
            {localProject.photos.map((photo, i) => (
              <img key={i} src={photo} alt={`Фото ${i + 1}`} />
            ))}
          </div>
        </div>
      )}

      <label>
        <b>Статус:</b>
        <select value={localProject.status} onChange={handleStatusChange}>
          <option>Проектирование</option>
          <option>Строительство</option>
          <option>Сдача объекта</option>
        </select>
      </label>

      <div className="documents-section">
        <b>Документы:</b>
        <ul>
          {localProject.documents.map((doc, i) => (
            <li key={i}>
              {doc}
              <button onClick={() => handleDeleteDocument(doc)} className="delete-doc-btn">Удалить</button>
            </li>
          ))}
        </ul>
        <input type="file" multiple onChange={handleFileUpload} />
      </div>

      <button onClick={handleSave} className="save-btn">Сохранить</button>
    </div>
  );
};

export default ProjectDetails;
