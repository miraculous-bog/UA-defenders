import React from 'react';

import Button from '../../common/components/Button';

import Input from './components/Input';
import RadioBtn from './components/RadioBtn';
import styles from './form.module.css';



const Form = () => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.name}>
				<h2>Надаю допомогу</h2>
				<p>Тут ви можете запропонувати допомогу/послугу/продукт для цивільних та військових. Також ця база може допомогти волонтам та організаціям з'єднювати потребу та її вирішення.</p>
			</div>
			<form className={styles.form}>
				<Input />
				<RadioBtn />
				<Button text="Відправити форму" />
			</form>
		</div>
	);
}

export default Form;