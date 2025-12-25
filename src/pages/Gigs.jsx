import { useState, useEffect } from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import './CSS/Gigs.css';
import logo from '../../public/trills-logo.png';

export default function Gigs() {
	const [gigList, setGigList] = useState([]);
	const [rawGigListData, setRawGigListData] = useState('');

	useEffect(() => {
		try {
			fetch('../../GigGuide/gigs.txt')
				.then(res => res.text())
				.then(text => setRawGigListData(text));
		} catch (e) {
			throw new error('Failed to load gig data from GigGuide/gigs.txt', e);
		}
	}, []);

	useEffect(() => {
		if (!rawGigListData) return;
		formatList();
	}, [rawGigListData]);

	const formatList = () => {
		let splitData = rawGigListData.split('?');
		let gigData = splitData[3];
		let gigArray = gigData.split('#');
		setGigList(gigArray);
	};

	const GigListings = () => {
		return (
			<ul className='gigs-list'>
				{gigList.map((gig, index) => {
					if (gig !== '') {
						let links = gig.split('$');
						if (links.length > 1) {
							const gigName = links[0];
							const ticketsLink = links[1];

							return (
								<li
									className='gig-listing'
									key={gig}
								>
									<p className='ticketed-gig'>{gigName} → </p>{' '}
									<a
										href={ticketsLink}
										target='_blank'
									>
										TICKETS
									</a>
								</li>
							);
						} else {
							if (index === 1) {
								return (
									<li
										className='gig-listing-title'
										key={gig}
									>
										{gig}
									</li>
								);
							} else {
								return (
									<li
										className='gig-listing'
										key={gig}
									>
										{gig}
									</li>
								);
							}
						}
					}
				})}
			</ul>
		);
	};

	return (
		<div className='gigs'>
			<NavHeader />
			<div className='gigs-container container-theme'>
				<img
					className='logo'
					src={logo}
					alt='Trillians rock bar logo'
				/>
				<h2 style={{ fontSize: '2rem' }}>What's On At Trillians</h2>
				<p style={{ textAlign: 'center' }}>
					Any gigs listed with +LOCAL means there's room for local bands to support, Please contact via
					trillians@gmx.com or buzz through{' '}
					<a
						href='https://www.facebook.com/trilliansrockbar'
						target='_blank'
					>
						Facebook
					</a>
				</p>
				<GigListings />
			</div>
			<Footer />
		</div>
	);
}
