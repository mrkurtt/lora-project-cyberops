import React, { useEffect, useState } from 'react';
import IOT from '../assets/iot-icon.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleLogin = () => {
		const r_email = import.meta.env.VITE_APP_EMAIL;
		const r_pass = import.meta.env.VITE_APP_PASSWORD;

		if (email !== r_email || password !== r_pass) {
			alert('Incorrect email or password.');
		} else {
			alert('Login successful.');
			localStorage.setItem('loggedIn', true);
			navigate('/');
		}
	};

	useEffect(() => {
		console.log(email, password);
	}, [email, password]);
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<div className="flex justify-center">
					<img src={IOT} alt="iot-icon.png" width={50} />
				</div>

				<h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
					Group A LoRa Project
				</h2>

				<p className="text-center text-slate-500 text-lg my-4">Login</p>

				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="w-full p-3 border border-gray-300 rounded-lg"
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700 mb-2">
						Password
					</label>
					<input
						type="password"
						id="password"
						className="w-full p-3 border border-gray-300 rounded-lg"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					onClick={handleLogin}
					type="button"
					className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
				>
					Login
				</button>
			</div>
		</div>
	);
};
