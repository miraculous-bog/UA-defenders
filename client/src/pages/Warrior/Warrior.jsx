import React, { useState, useEffect } from 'react';

import Button from '../../common/components/Button';
import CardMenu from '../../common/components/CardMenu';
import styles from './warrior.module.css'
import WarriorFeed from './WarriorFeed/WarriorFeed';


import WarriorImg from '../../assets/images/warrior.png';
import { Link } from 'react-router-dom';

const Warrior = () => {
	const [activeType, setActiveType] = useState('warriorRehabilitation');
	const [data, setData] = useState([]);

	useEffect(() => {

		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		};

		fetch(`http://localhost:8080/api/warriorRehabilitation`, options)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setData(data.receivedwarriorRehabilitation);
			})
			.catch((err) => console.log('error'));

	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.menu}>
					<h1>
						Реабілітація військових
					</h1>
					<p>
						Тут зібрана інформація щодо військових, які потребують нашої допомоги. Зараз кожна гривня може врятувати чиєсь життя або суттєво допомогти. Приєднуйтесь!
					</p>
					<div className={styles.buttons}>
						<Link to="/form-warrior">
							<Button text="Подати заявку, якщо ви військовий" />
						</Link>
					</div>
				</div>
				<img className={styles.postimg} src={WarriorImg} alt="project" />
			</div>
			<WarriorFeed data={data} />
		</div>
	);
}

export default Warrior;