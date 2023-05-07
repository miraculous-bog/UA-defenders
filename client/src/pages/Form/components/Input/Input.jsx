import React from 'react';
import styles from './input.module.css'

const Input = ({ label, name, type, value, onChange }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} value={value} onChange={onChange} required />
		</div>
	);
};

export default Input;