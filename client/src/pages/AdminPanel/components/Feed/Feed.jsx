import React, { useState } from 'react';
import CharityCard from '../../../../common/components/CharityCard';
import Button from '../../../../common/components/Button';
import styles from './feed.module.css';

const Feed = ({ data }) => {

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{data.map((item) => (
					<li key={item._id} className={styles.item}>
						<CharityCard
							id={item._id}
							title={item.title}
							description={item.description}
							location={item.location}
							category={item.category}
							contact={item.contact}
							details={item.details}
							email={item.email}
							status={item.status}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;