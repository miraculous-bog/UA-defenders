import React from 'react';
import styles from './radioBtn.module.css';

const RadioBtn = ({ label, name, value, onChange, options }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<select name={name} value={value} onChange={onChange} required>
				<option value="">Выберите категорию</option>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default RadioBtn;