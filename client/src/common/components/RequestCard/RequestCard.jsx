import React, { useState } from 'react';

import Stub from '../../../assets/images/stub.png'
import Button from '../Button';
import CardWrapper from '../../HOCS/CardWrapper';

import styles from './requestCard.module.css';

const RquestCard = ({ id, email, location, title, description, category, contact, status, type }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>
						{title}
					</h1>
					<p>
						{description}
					</p>
					<p>
						<span className={styles.static}>Контакти:</span>  {contact} {email}
					</p>
					<p className={styles.category}>{category}</p>
				</div>
			</div>
			<Button text="Детальна інформація" />
		</div>
	);
};

export default RquestCard;