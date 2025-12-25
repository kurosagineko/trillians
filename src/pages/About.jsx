import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './CSS/About.css';
import logo from '../../public/trills-logo.png';

export default function About() {
	return (
		<div className='about'>
			<NavHeader />
			<div className='about-container container-theme'>
				<img
					className='logo'
					src={logo}
					alt='Trillians rock bar logo'
				/>
				<div className='about-section'></div>
				<h2 style={{ fontSize: '1.8rem' }}>Trillians Rock Bar is Newcastle's best kept secret!</h2>
				<p>After a strange couple of years Trillians is now back with a bang!</p>
				<p>
					Trillians sound engineer of 23 years Dave Hills, and former customer Barbara Blair, have taken the reigns.
				</p>
				<p>
					A cellar bar{' '}
					<a
						href='https://maps.app.goo.gl/BKoUnb5pqYY7T2DY9'
						target='_blank'
					>
						hidden away in Princess Square
					</a>
					, just opposite the city's main library, Trillians is famed across the land for it's great atmosphere and
					varied live shows throughout the year. With regular Rock, Metal, Punk, Hardcore, Reggae, Glam and many other
					shows you can guarantee an eclectic mix on the <Link to='/gigs'>Gig Guide</Link>.
				</p>
				<p>
					“I was the sound engineer at Trillians for 23 years and it had always been my dream to run the place” said
					Dave.
				</p>
				<p>
					“So when the last lot left I put a shout out as I knew I couldn't do it by myself and I had a message back
					from Barbara, who'd drunk in the bar for years and who shared the passion for it that I have as well.”
				</p>
				<p>
					“The key thing is to get that community feel back. People do have strong feelings about the place and we want
					to put it back to being a proper rock bar - how it's meant to be.”
				</p>
				<p>
					“We'll get all kinds of waifs and strays who aren't accepted in other bars, but Trillians always was about
					that community. People feel safe coming in here. They feel like they belong.”
				</p>
				<p>
					A great range of <Link to='/drinks'>beers, lagers, ciders</Link>, spirits and more can be found behind
					Trillians iconic bar featuring inlaid albums from legendary artists. It's got to be seen.
				</p>
				<p>See you at the bar!</p>
				<p style={{ fontWeight: 'bolder', fontSize: '1.1rem' }}>
					All ages welcome until 7pm under adult supervision. 18+ only after 7pm. No exceptions to this rule.
				</p>
				<p style={{ fontWeight: 'bolder', fontSize: '1.3rem' }}>
					We operate a Challenge 25 Policy so if you are lucky enough to look under 25 please remember to bring some ID
					with you. Accepted forms of ID include Drivers License, Passport and cards containing the PASS Hologram.
				</p>
			</div>
			<Footer />
		</div>
	);
}
