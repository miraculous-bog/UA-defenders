import React from 'react';


import styles from './radioBtn.module.css'


const RadioBtn = () => {

	return (
		<div className={styles.wrapper}>
			<h2>Категорії</h2>
			<p>Віднесіть вашу інформацію до найбільш релевантної категорії</p>
			{/* <input id="car" type="radio" name="category" value="Автомобілі" />
			<label for="car">
				Автомобілі
			</label>

			<input type="radio" name="category" value="Бронижелети" />
			<label>
				Бронижелети
			</label>
			<label>
				<input type="radio" name="category" value="Тепловізори" />
				Тепловізори
			</label>
			<label>
				<input type="radio" name="category" value="Військовий одяг" />
				Військовий одяг
			</label>
			<label>
				<input type="radio" name="category" value="Рації" />
				Рації
			</label>
			<label>
				<input type="radio" name="category" value="Генератори" />
				Генератори
			</label>
			<label>
				<input type="radio" name="category" value="Дрони" />
				Дрони
			</label>
			<label>
				<input type="radio" name="category" value="Медикаменти" />
				Медикаменти
			</label>
			<label>
				Військове спорядження
				<input type="radio" name="category" value="Військове спорядження" />
			</label>
			<label>
				інше
				<input type="radio" name="category" value="інше" />
			</label> */}
			<div className={styles.radioBtns}>
				<input type="radio" id="contactChoice1"
					name="contact" value="email" />
				<label htmlFor="contactChoice1">Email</label>

				<input type="radio" id="contactChoice2"
					name="contact" value="phone" />
				<label htmlFor="contactChoice2">Phone</label>

				<input type="radio" id="contactChoice3"
					name="contact" value="mail" />
				<label htmlFor="contactChoice3">Mail</label>
			</div>
		</div>
	);
}

export default RadioBtn;