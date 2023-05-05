import React from 'react';

import Stub from '../../../assets/images/stub.png'
import Button from '../Button';
import CardWrapper from '../../HOCS/CardWrapper';

import styles from './charityCard.module.css';

const CharityCard = ({ img = Stub }) => {

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>
						24 бронежилети для підрозділів ЗСУ в м.Києві
					</h1>
					<p>
						Для захисників м.Києва потрібно 24 бронежилетів класу IV+, які добре захищають від куль та уламків. Бронежилети рятують життя.
					</p>
					<p>
						<span className={styles.static}>Потрібно зібрати:</span>  310 000
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

export default CardWrapper(CharityCard);