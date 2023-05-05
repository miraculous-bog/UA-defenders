import React from 'react';

import CardMenu from '../../../../common/components/CardMenu';
import Button from '../../../../common/components/Button';
import styles from './panel.module.css';

const Panel = () => {
	return (
		<div class={styles.wrapper} >
			<CardMenu text="Благодійні Проекти" />
			<CardMenu text="Реабілітація військових" />
			<CardMenu text="Запити матеріальної допомоги" />
			<CardMenu text="Зворотній зв'язок" />
		</div>

	);
};

export default Panel;