import React from 'react';


import styles from './input.module.css'


const Input = ({ title = 'Title', description = '', type = 'text', placeholder = 'Ваша відповідь' }) => {

	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<p>{description}</p>
			<input type={type} placeholder={placeholder} />
		</div>
	);
}

export default Input;