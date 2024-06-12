import React, { useEffect, useState } from 'react';
import TempIcon from '../assets/temp-icon.png';
import HumIcon from '../assets/hum-icon.png';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import IOT from '../assets/iot-icon.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [temperature, setTemperature] = useState(null);
	const [humidity, setHumidity] = useState(null);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('loggedIn');
		navigate('/login');
	};

	useEffect(() => {
		const tempRef = ref(db, 'temp');
		const humRef = ref(db, 'humidity');

		onValue(tempRef, (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				console.log(data);
				setTemperature(data);
				setLoading(false);
			}
		});

		onValue(humRef, (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				console.log(data);
				setHumidity(data);
				setLoading(false);
			}
		});
	}, []);

	return (
		<div className="min-h-screen flex justify-center bg-gray-100 p-4">
			<div>
				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
					<div className="flex justify-center">
						<img src={IOT} alt="iot-icon.png" width={50} />
					</div>
					<h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
						Group A LoRa Project
					</h2>
					<div className="text-center">
						<div>
							<div className="flex justify-center">
								<img src={TempIcon} width={60} height={40} />
								<p className="text-center text-slate-500 text-lg my-4">
									Temperature
								</p>
							</div>
							<div className="flex items-center justify-center bg-gray-600 py-2 rounded-md mt-4">
								<h1 className="font-bold text-3xl text-white">
									{loading ? 'Fetching...' : temperature}
									<span className="text-white">&deg;C</span>
								</h1>
							</div>
						</div>

						<div className="mt-6">
							<div className="flex justify-center">
								<img src={HumIcon} width={60} height={40} />
								<p className="text-center text-slate-500 text-lg my-4">
									Humidity
								</p>
							</div>
							<div className="flex items-center justify-center bg-gray-600 py-2 rounded-md mt-4">
								<h1 className="font-bold text-3xl text-white">
									{loading ? 'Fetching...' : humidity}
									<span className="text-white">%</span>
								</h1>
							</div>
						</div>
						<hr />
						<button
							onClick={logout}
							type="button"
							className="w-full bg-red-500 text-white py-1 mt-6 rounded-lg hover:bg-red-600 transition duration-300"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
