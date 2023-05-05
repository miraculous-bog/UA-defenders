import { Outlet } from 'react-router-dom';

import Header from './common/components/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<footer>
				<h5> Все буде Україна</h5>
			</footer>
		</>
	)
}

export default Layout;