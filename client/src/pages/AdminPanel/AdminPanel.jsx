import React from 'react';

import Panel from './components/Panel';
import Feed from './components/Feed';

import styles from './adminPanel.module.css';

const AdminPanel = () => {
	return (
		<div>
			<Panel />
			<Feed />
		</div>
	);
};

export default AdminPanel;