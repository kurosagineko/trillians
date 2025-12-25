import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import './CSS/Landing.css';
import logo from '../../public/trills-logo.png';

export default function Landing() {
	return (
		<>
			<NavHeader />
			<div className='main-container container-theme'>
				<img
					className='logo'
					src={logo}
					alt=''
				/>
				<p>Thank you all for your continued support!</p>
				<p>┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻</p>
				<div className='opening-times-container'>
					<p style={{ marginBottom: '0', textAlign: 'center' }}>Opening Times:</p>
					<ul className='opening-times-list'>
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
			</div>
			<div className='extra-container container-theme'>
				<div className='extra-links'>
					<a href='#'>Facebook</a>
					<a href='#'>Twitter</a>
					<a href='#'>Instagram</a>
					<a href='#'>LOST & FOUND</a>
				</div>
				<div className='friend-links'>
					<h2>Some of our friends</h2>
					<ul className='friend-links-list'>
						<li>
							<a href='#'>THE RENEGADE ROCK SHOW</a>
						</li>
						<li>
							<a href='#'>SHOCK CITY</a>
						</li>
						<li>
							<a href='#'>SD ENTERTAINMENT</a>
						</li>
						<li>
							<a href='#'>FLOOR SHOW PROMOTIONS</a>
						</li>
						<li>
							<a href='#'>CONQUEST MUSIC</a>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
}
