import React, { useEffect, useState } from 'react';
import '../css/addProjectForm.css';

const AddProjectForm = ({ onAddProject, onCancel }) => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    startDate: '',
    endDate: '',
    developer: '',
    area: '',
    floors: '',
    units: '',
    materials: '',
    status: 'Проектирование',
    documents: [],
    image: '',
    photos: [],
  });

  useEffect(() => {
    // Запретить прокрутку
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...urls]
    }));
  };

  const handleDocumentUpload = (event) => {
    const files = Array.from(event.target.files).map(file => file.name);
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProject(formData);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onCancel}></div>
      <div className="add-project-modal">
        <h2>Добавить новый проект</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Название" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Адрес" onChange={handleChange} required />
          <input type="date" name="startDate" placeholder="Дата начала" onChange={handleChange} required />
          <input type="date" name="endDate" placeholder="Дата окончания" onChange={handleChange} required />
          <input type="text" name="developer" placeholder="Застройщик" onChange={handleChange} required />
          <input type="text" name="area" placeholder="Площадь" onChange={handleChange} required />
          <input type="number" name="floors" placeholder="Этажность" onChange={handleChange} required />
          <input type="number" name="units" placeholder="Количество помещений" onChange={handleChange} required />
          <input type="text" name="materials" placeholder="Материалы" onChange={handleChange} required />
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option>Проектирование</option>
            <option>Строительство</option>
            <option>Сдача объекта</option>
          </select>

          <label>Главное фото:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          {formData.image && <img src={formData.image} alt="Preview" className="preview-img" />}

          <label>Фотографии:</label>
          <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} />

          <label>Документы:</label>
          <input type="file" multiple onChange={handleDocumentUpload} />

          <div className="form-buttons">
            <button type="submit">Добавить</button>
            <button type="button" onClick={onCancel}>Отмена</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProjectForm;
