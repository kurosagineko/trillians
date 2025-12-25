import NavHeader from '../components/NavHeader';
import './CSS/Landing.css';
import logo from '../../public/trills-logo.png';

export default function Landing() {
	return (
		<>
			<NavHeader />
			<div className='main-container'>
				<img
					className='logo'
					src={logo}
					alt=''
				/>
				<p>Thank you all for your continued support!</p>
				<p>┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻</p>
				<p>Opening Times:</p>
				<ul className='opening-times'>
					<li>
						<p>Monday → 3pm - 11pm</p>
					</li>
					<li>
						<p>Tuesday → 3pm - 11pm</p>
					</li>
					<li>
						<p>Wednesday → 3pm - 11pm</p>
					</li>
					<li>
						<p>Thursday → 12pm - 11pm</p>
					</li>
					<li>
						<p>Friday → 12pm - 1am</p>
					</li>
					<li>
						<p>Saturday → 12pm - 2am</p>
					</li>
					<li>
						<p>Sunday → 5pm - 11pm</p>
					</li>
				</ul>
			</div>
		</>
	);
}
