import React, { useState } from 'react';

import Stub from '../../../assets/images/stub.png'
import Button from '../Button';
import CardWrapper from '../../HOCS/CardWrapper';
import Modal from '../Modal';

import styles from './warriorCard.module.css';

const WarriorCard = ({ id, name, history, location, militaryPoint, cost, img = Stub, btnState = true, contact, details }) => {
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
		fetch(`http://localhost:8080/api/warriorRehabilitation/accept/${id}`, options)
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
		fetch(`http://localhost:8080/api/helpRequest/reject/${id}`, options)
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
					<h1 className={styles.title}>
						{name}
					</h1>
					<p>
						{history}
					</p>
					<p>
						<span className={styles.static}>Місто:</span>  {location}
					</p>
					<p>
						<span className={styles.static}>Військова частина:</span>  {militaryPoint}
					</p>
					<p>
						<span className={styles.static}>Потрібно зібрати:</span>  {cost}
					</p>
				</div>
				<img className={styles.img} src={img} alt='vizualization' />
			</div>
			<div className={styles.buttons}>
				<Modal name={name} contact={contact} detail={details} />
				{btn ? <div className="controllers">
					<Button className={styles.btn} text="Прийняти" fn={acceptRequest} id={id} />
					<Button className={styles.btn} text="Відхилити" fn={rejectRequest} id={id} />
				</div> : null}
			</div>
		</div>
	);
};

export default CardWrapper(WarriorCard);