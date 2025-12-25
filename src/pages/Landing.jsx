import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import './CSS/Landing.css';
import logo from '../../public/trills-logo.png';

export default function Landing() {
	return (
		<div className='home'>
			<NavHeader />
			<div className='main-container container-theme'>
				<img
					className='logo'
					src={logo}
					alt='Trillians rock bar logo'
				/>
				<p>Thank you all for your continued support!</p>
				<p>┻━┻ ︵ \( °□° )/ ︵ ┻━┻</p>
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
					<a
						href='https://www.facebook.com/trilliansrockbar'
						target='_blank'
					>
						Facebook
					</a>
					<a
						href='https://x.com/trilliansrock'
						target='_blank'
					>
						Twitter
					</a>
					<a
						href='https://www.instagram.com/trilliansrocks/'
						target='_blank'
					>
						Instagram
					</a>
					<a
						href='https://www.facebook.com/groups/957326982258638'
						target='_blank'
					>
						LOST & FOUND
					</a>
				</div>
				<div className='friend-links'>
					<h2>Some of our friends</h2>
					<ul className='friend-links-list'>
						<li>
							<a
								href='https://www.facebook.com/groups/renrockshow'
								target='_blank'
							>
								THE RENEGADE ROCK SHOW
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/shockcityprod'
								target='_blank'
							>
								SHOCK CITY
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/SDEntertainmentIre'
								target='_blank'
							>
								SD ENTERTAINMENT
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/floorshowpromotions'
								target='_blank'
							>
								FLOOR SHOW PROMOTIONS
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/ConquestMusicLtd'
								target='_blank'
							>
								CONQUEST MUSIC
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}
