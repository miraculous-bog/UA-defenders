import React, { useState } from 'react';

import Button from '../../../common/components/Button';

import { useLocation } from 'react-router-dom';
import Input from '../components/Input';
// import RadioBtn from './components/RadioBtn';
import RadioBtn from '../components/RadioBtn';
import styles from './formRequest.module.css';

const FormRequest = ({ typeForm }) => {
	const offerDescr = {
		title: 'Надаю допомогу',
		text: 'Тут ви можете запропонувати допомогу/послугу/продукт для цивільних та військових. Також ця база може допомогти волонтам та організаціям зєднювати потребу та її вирішення.'
	}
	const requestDescr = {
		title: 'Прошу допомоги',
		text: 'Тут ви можете попросити про допомогу або пошукати, хто може вам її надати.'
	}
	const [formData, setFormData] = useState({
		email: '',
		location: '',
		title: '',
		category: '',
		description: '',
		contact: '',
		type: typeForm
	});

	const { email, location, title, category, contact, description } = formData;

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (email && location && title && category && contact && description) {
			const response = await fetch(`http://localhost:8080/api/helpRequest/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				setFormData({
					email: '',
					location: '',
					title: '',
					category: '',
					description: '',
					contact: '',
				});
				window.location.href = '/help-request';
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
				<h2>{typeForm === 'offer' ? offerDescr.title : requestDescr.title}</h2>
				<p>{typeForm === 'offer' ? offerDescr.text : requestDescr.text}</p>
			</div>
			<form onSubmit={handleSubmit}>
				<Input label="Назва" name="title" type="text" value={title} onChange={handleChange} />
				<Input label="Email" name="email" type="email" value={email} onChange={handleChange} />
				<Input label="Локація" name="location" type="text" value={location} onChange={handleChange} />
				<Input label="Опис" name="description" type="text" value={description} onChange={handleChange} />
				<RadioBtn label="Категорія" name="category" value={category} onChange={handleChange} options={['Автомобілі', 'Бронежилети', 'Тепловізори', 'Військовий одяг', 'Рація', 'Генератори', 'Дрони', 'Медикаменти', 'Військове спорядження', 'Інше']} />
				<Input label="Контакти" name="contact" type="text" value={contact} onChange={handleChange} />
				<button className={styles.submit} type="submit">Надіслати</button>
			</form>
		</div>
	);
};

export default FormRequest;