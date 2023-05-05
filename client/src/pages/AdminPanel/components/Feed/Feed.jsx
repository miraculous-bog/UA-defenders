import React from 'react';

import CharityCard from '../../../../common/components/CharityCard';
import WarriorCard from '../../../../common/components/WarriorCard';
import Button from '../../../../common/components/Button';

import styles from './feed.module.css';

const Feed = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				<li key={1} className={styles.item}>
					<CharityCard />
					<WarriorCard />
				</li>
			</ul>
			<Button className={styles.more} text="Завантажити ще" />
		</div>
	);
};

export default Feed;