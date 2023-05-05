import React from 'react';

import Stub from '../../../assets/images/stub.png'
import Button from '../Button';
import CardWrapper from '../../HOCS/CardWrapper';

import styles from './warriorCard.module.css';

const WarriorCard = ({ img = Stub }) => {

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>
						Кощинський Іван Петрович
					</h1>
					<p>
						Історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія,  історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія, історія,
					</p>
					<p>
						<span className={styles.static}>Місто:</span>  Коломия
					</p>
					<p>
						<span className={styles.static}>Військова частина:</span>  А4267
					</p>
					<p>
						<span className={styles.static}>Потрібно зібрати:</span>  150 000
					</p>
				</div>
				<img clasName={styles.img} src={img} alt='vizualization' />
			</div>
			<div className={styles.buttons}>
				<Button text="Детальна інформація" />
				<div className="controllers">
					<Button className={styles.btn} text="Прийняти" />
					<Button className={styles.btn} text="Відхилити" />
				</div>
			</div>
		</div>
	);
};

export default CardWrapper(WarriorCard);