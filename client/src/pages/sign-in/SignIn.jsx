import React, { useEffect, useState } from 'react';

import Header from '../../common/components/Header';
import InputSign from '../../common/components/InputSign';
import Button from '../../common/components/Button';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../common/hook/useAuth';
import useFetch from '../../common/hook/useFetch';

import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import styles from './signIn.module.css';

const SignIn = () => {

	const [dataForm, setDataForm] = useState({ email: '', password: '' });
	const { responseData, fetchData } = useFetch('login');

	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();

	const fromPage = location.state?.from?.pathname || '/';

	useEffect(() => {
		if (localStorage.getItem('token')) {
			signin(localStorage.getItem('token'), () =>
				navigate(fromPage, { replace: true })
			);
		}
	});
	console.log(responseData);

	if (responseData.successful) {
		localStorage.setItem('token', responseData.token);
		localStorage.setItem('type', responseData.type);
		signin(responseData.token, () => navigate(fromPage, { replace: true }));
	}

	const handlerInput = (e) => {
		const formData = { [e.target.name]: e.target.value };
		console.log(formData);
		setDataForm((prev) => {
			return {
				...prev,
				...formData,
			};
		});
	};

	const handlerForm = (e) => {
		e.preventDefault();
		console.log(dataForm);
		fetchData(dataForm);
	};




	return (
		<div>
			<box className={styles.box} >
				<div className={styles.wrapper}>
					<Logo className={styles.logo} />
					<form className={styles.form} onSubmit={handlerForm}>
						<InputSign type='email' placeholder="Введіть пошту" value={dataForm.email} onChange={handlerInput} name='email' />
						<InputSign type='password' placeholder="Введіть пароль" value={dataForm.password} name="password" onChange={handlerInput} />
						<Button text='Вхід' type="submit" />
					</form>
				</div>
				<p className='tip'>
					if you not have an account you can{' '}
					<Link to='/sign-up'>
						<span className='link-helper'>Зареєструватись</span>
					</Link>
				</p>

				<div className={styles.bottom}>
					<p>Все буде Україна</p>
				</div>
			</box>
		</div>
	);
};

export default SignIn;