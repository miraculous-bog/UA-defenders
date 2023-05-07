import React, { useState } from 'react';

import Button from '../../../common/components/Button';

import Input from '../components/Input';
// import RadioBtn from './components/RadioBtn';
import RadioBtn from '../components/RadioBtn';
import styles from './formProject.module.css';

const FormProject = () => {
	const [formData, setFormData] = useState({
		title: '',
		email: '',
		description: '',
		details: '',
		location: '',
		contact: '',
		category: ''
	});

	const { title, email, description, details, location, contact, category } = formData;

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (title && email && description && details && location && contact && category) {
			const response = await fetch('http://localhost:8080/api/charityProject/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				setFormData({
					title: '',
					email: '',
					description: '',
					details: '',
					location: '',
					contact: '',
					category: ''
				});
				window.location.href = '/charity-project';
			} else {
				alert('Ошибка при отправке данных');
			}
		} else {
			alert('Пожалуйста, заполните все поля');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.name}>
				<h2>Надаю допомогу</h2>
				<p>Тут ви можете запропонувати допомогу/послугу/продукт для цивільних та військових. Також ця база може допомогти волонтам та організаціям з'єднювати потребу та її вирішення.</p>
			</div>
			<form onSubmit={handleSubmit}>
				<Input label="Название" name="title" type="text" value={title} onChange={handleChange} />
				<Input label="Email" name="email" type="email" value={email} onChange={handleChange} />
				<Input label="Краткое описание" name="description" type="text" value={description} onChange={handleChange} />
				<Input label="Детали" name="details" type="text" value={details} onChange={handleChange} />
				<Input label="Локация" name="location" type="text" value={location} onChange={handleChange} />
				<Input label="Контакты" name="contact" type="text" value={contact} onChange={handleChange} />
				<RadioBtn label="Категория" name="category" value={category} onChange={handleChange} options={['Автомобили', 'Бронежилеты', 'Теплопровизоры', 'Военная одежда', 'Рации', 'Генераторы', 'Дроны', 'Медикаменты', 'Военное снаряжение', 'Иное']} />
				<button type="submit">Отправить</button>
			</form>
		</div>
	);
};

export default FormProject;