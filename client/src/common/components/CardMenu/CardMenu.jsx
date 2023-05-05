import React from 'react';

import Heart from '../../../assets/images/heart.png'

import styles from './cardMenu.module.css';

const Header = ({ img = Heart, text }) => {
	const altName = `card-manu${text}`;

	return (
		<div className={styles.card}>
			<img clasName={styles.img} src={img} alt={altName} />
			<h5 className={styles.text}>{text}</h5>
		</div>
	);
};

export default Header;