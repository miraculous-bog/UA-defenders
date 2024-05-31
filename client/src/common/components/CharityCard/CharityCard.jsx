import React, { useState } from 'react';
import Stub from '../../../assets/images/stub.png';
import Button from '../Button';
import CardWrapper from '../../HOCS/CardWrapper';
import Modal from '../Modal';
import cors from 'cors';
import URL from '../../helper/url';

import styles from './charityCard.module.css';
const CharityCard = ({ id, img = Stub, title, description, details, btnState = true }) => {
	const [btn, setBtn] = useState(btnState);

	const acceptRequest = async (id) => {

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		};
		console.log(`Bearer ${localStorage.getItem('token')}`);
		fetch(`${URL}/api/charityProject/accept/${id}`, options)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setBtn(false);
			})
			.catch((err) => console.log('error'));

	};

	const rejectRequest = async (id) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		};
		console.log(`Bearer ${localStorage.getItem('token')}`);
		fetch(`${URL}/api/charityProject/reject/${id}`, options)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setBtn(false);
			})
			.catch((err) => console.log('error'));

	};
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>{title}</h1>
					<p>{description}</p>
					<p>
						<span className={styles.static}>Потрібно зібрати:</span> {details}
					</p>
				</div>
				<img className={styles.img} src={img} alt="vizualization" />
			</div>
			<div className={styles.buttons}>
				<Modal name={title} detail={details} />
				{btn ? <div className="controllers">
					<Button className={styles.btn} text="Прийняти" fn={acceptRequest} id={id} />
					<Button className={styles.btn} text="Відхилити" fn={rejectRequest} id={id} />
				</div> : null}
			</div>
		</div>
	);
};

export default CardWrapper(CharityCard);