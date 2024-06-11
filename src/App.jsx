import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AuthenticatedPrivateRoute from './components/AuthenticatedRoute';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute redirect={'/login'}>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<AuthenticatedPrivateRoute>
								<Login />
							</AuthenticatedPrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
