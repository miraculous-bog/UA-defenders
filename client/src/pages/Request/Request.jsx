import React from 'react';

import Header from '../../common/components/Header';
import InputSign from '../../common/components/InputSign';
import Button from '../../common/components/Button';

import RequestImg from '../../assets/images/request.png'
import styles from './request.module.css';

const Request = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.menu}>
					<h1>
						Волонтерські та громадскі ініціативи, що працюють в Україні та за її межами.
					</h1>
					<div className={styles.buttons}>
						<Button text="Надаю допомогу" />
						<Button text="Прошу допомогу" />
					</div>
				</div>
				<img className={styles.img} src={RequestImg} alt="about1" />
			</div>
		</div>
	);
};

export default Request;