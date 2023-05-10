import React, { useState } from 'react';

import Button from '../../../common/components/Button';

import Input from '../components/Input';
// import RadioBtn from './components/RadioBtn';
import RadioBtn from '../components/RadioBtn';
import styles from './formWarrior.module.css';

const FormWarrior = () => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		location: '',
		militaryPoint: '',
		history: '',
		medicine: '',
		cost: '',
		details: '',
		contact: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const { email, name, location, militaryPoint, history, medicine, cost, details, contact } = formData;

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendFormData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:8080/api/warriorRehabilitation', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) throw new Error('Помилка при відправці форми');
			setFormData({
				email: '',
				name: '',
				location: '',
				militaryPoint: '',
				history: '',
				medicine: '',
				cost: '',
				details: '',
				contact: '',
			});
			window.location.href = '/warrior-rehabilitation';
		} catch (error) {
			console.log(error);
			alert(error.message);
		}
		setIsLoading(false);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (email && name && location && militaryPoint && history && medicine && cost && details && contact) {
			sendFormData();
		} else {
			alert('Пожалуйста, заповніть усі поля');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.name}>
				<h2>Надати допомогу</h2>
				<p>
					Тут ви можете запропонувати допомогу/послугу/продукт для цивільних
					та військових. Також ця база може допомогти волонтам та організаціям
					з'єднювати потребу та її вирішення.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<Input
					label="Ім'я"
					name="name"
					type="text"
					value={formData.name}
					onChange={handleChange}
				/>
				<Input
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<Input
					label="Локація"
					name="location"
					type="text"
					value={formData.location}
					onChange={handleChange}
				/>
				<Input
					label="Військова частина"
					name="militaryPoint"
					type="text"
					value={formData.militaryPoint}
					onChange={handleChange}
				/>
				<Input
					label="Історія"
					name="history"
					type="text"
					value={formData.history}
					onChange={handleChange}
				/>
				<Input
					label="Медицина"
					name="medicine"
					type="text"
					value={formData.medicine}
					onChange={handleChange}
				/>
				<Input
					label="Ціна"
					name="cost"
					type="text"
					value={formData.cost}
					onChange={handleChange}
				/>
				<Input
					label="Деталі"
					name="details"
					type="text"
					value={formData.details}
					onChange={handleChange}
				/>
				<Input
					label="Контакти"
					name="contact"
					type="text"
					value={formData.contact}
					onChange={handleChange}
				/>
				<button className={styles.submit} type="submit">Відправити</button>
			</form>
		</div>
	);
};

export default FormWarrior;