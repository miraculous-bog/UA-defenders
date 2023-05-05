import React from 'react';

import { ReactComponent as Logo } from '../../../assets/svg/Logo.svg'
import { ReactComponent as Exit } from '../../../assets/svg/Exit.svg'
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<a href="#">
				<Logo className={styles.logo} />
			</a>
			<nav className={styles.nav}>
				<a href="#">
					Хто ми
				</a>
				<a href="#">
					Зворотній зв'язок
				</a>
				<a href="#">
					adminPanel
				</a>
				<a href="#">
					<Exit className={styles.exit} />
				</a>
			</nav>
		</header>
	);
};

export default Header;