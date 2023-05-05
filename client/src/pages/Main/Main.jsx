import React from 'react';

import Button from '../../common/components/Button';
import CardMenu from '../../common/components/CardMenu';
import styles from './main.module.css'


import MainImg from '../../assets/images/main.png'
import SubMain from '../../assets/images/submain.png'
import Heart from '../../assets/images/heart.png'

const Main = () => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<img src={MainImg} alt="" />
			</div>
			<div className={styles.fonds}>
				<div className={styles.fondstext}>
					<h1>
						Фонди та реквізити
					</h1>
					<p>
						У якій би точці світу ви не знаходилися, у вас є можливість боротися сторони української армії. Для надання допомоги українським воїнам сьогодні працюють різні організації та рахунки, які збирають фінансову допомогу та допомагають армії в госпіталях, на складах, полігонах, боротьбі з дезінформацією і не тільки. Тут ви знайдете офіційні, достовірні та найоптимальніші способи внести донат.
					</p>
					<Button text="Фонди та реквізити" />
				</div>
				<img src={Heart} alt="main" />
			</div>
			<div className={styles.support}>
				<h1>
					Допомога військовим
				</h1>
				<p>
					Обери необхідний тип допомоги
				</p>
				<div className={styles.types}>
					<CardMenu text="Благодійні проекти" />
					<CardMenu text="Реабілітація військових" />
					<CardMenu text="Запити матеріальної допомоги" />
				</div>
			</div>
			<div className={styles.description}>
				<div className={styles.text}>
					<h1>Хто ми</h1>
					<p>Кожен з нас понад усе мріє про перемогу України. Ми знаємо, яким важливим є волонтерський фронт, тому вирішили структурувати хаос серед волонтерських ініціатив.

						Аби всі процеси працювали злагоджено та приносили максимальний результат ми постійно моніторимо інформацію, перевіряємо актуальність номерів, потреб та можливостей надати допомогу.</p>
					<Button text="Про нас" />
				</div>
				<img src={SubMain} alt="submain" />
			</div>
		</div>
	);
}

export default Main;