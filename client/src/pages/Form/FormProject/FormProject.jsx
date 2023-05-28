import React, { useState } from 'react';

import Button from '../../../common/components/Button';

import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
// import RadioBtn from './components/RadioBtn';
import RadioBtn from '../components/RadioBtn';
import styles from './formProject.module.css';

import URL from '../../../common/helper/url';

const FormProject = () => {
	const navigate = useNavigate();

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
			const response = await fetch(`${URL}/api/charityProject/`, {
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
				navigate('/charity-project', { replace: true });
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
				<h2>Створити заявку на благодійний проект</h2>
				<p>За допомогою цієї форми ви можете розказати про  благодійний проект.

					Разом ми Україна! Слава Україні!
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<Input label="Електронна пошта" name="email" type="email" value={email} onChange={handleChange} />
				<Input label="Назва (коротко про суть)" name="title" type="text" value={title} onChange={handleChange} />
				<Input label="Опис проекту (детальний опис)" name="description" type="text" value={description} onChange={handleChange} />
				<Input label="Вкажіть реквізити банку" name="details" type="text" value={details} onChange={handleChange} />
				<Input label="Локація" name="location" type="text" value={location} onChange={handleChange} />
				<Input label="Як з вами контактувати?" name="contact" type="text" value={contact} onChange={handleChange} />

				<RadioBtn label="Категорія" name="category" value={category} onChange={handleChange} options={['Автомобілі', 'Бронежилети', 'Тепловізори', 'Військовий одяг', 'Рація', 'Генератори', 'Дрони', 'Медикаменти', 'Військове спорядження', 'Інше']} />
				<button className={styles.submit} type="submit">Надіслати</button>
			</form>
		</div>
	);
};

export default FormProject;