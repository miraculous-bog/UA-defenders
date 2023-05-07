import React, { useState } from 'react';

import Button from '../../../common/components/Button';

import Input from '../components/Input';

import styles from './formFeedback.module.css';

const FormFeedback = () => {
	const [formData, setFormData] = useState({
		email: '',
		messagee: '',
		contact: ''
	});

	const [isLoading, setIsLoading] = useState(false);

	const { email, message, contact } = formData;

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendFormData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:8080/api/feedback', {
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
				messagee: '',
				contact: ''
			});
			window.location.href = '/';
		} catch (error) {
			console.log(error);
			alert(error.message);
		}
		setIsLoading(false);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (email && message && contact) {
			sendFormData();
		} else {
			alert('Пожалуйста, заповніть усі поля');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.name}>
				<h2>Зворотній зв’язок</h2>
				<p>
					За допопмогою цієї форми ви можете звязатись з командою волонтерів що займаються розробкою та модерацією сайту та контенту.
				</p>
			</div>
			<form onSubmit={handleSubmit}>

				<Input
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<Input
					label="Повідомлення"
					name="message"
					type="message"
					value={formData.message}
					onChange={handleChange}
				/>
				<Input
					label="Локація"
					name="contact"
					type="text"
					value={formData.contact}
					onChange={handleChange}
				/>

				<button type="submit">Відправити</button>
			</form>
		</div>
	);
};

export default FormFeedback;