import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import './App.css';

function App() {
	return (
		<Routes>
			{/* Public routes */}
			<Route
				path='/'
				element={<Landing />}
			/>
			<Route
				path='/about'
				element={<About />}
			/>

			{/* Protected routes */}
			{/* <Route element={<RequireAuth />}> */}
			{/* <Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
			</Route> */}

			{/* <Route
				path='*'
				element={<NotFound />}
			/> */}
		</Routes>
	);
}

export default App;
