import { useState, useEffect } from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import './CSS/Gigs.css';
import logo from '../../public/trills-logo.png';

export default function Gigs() {
	const [gigList, setGigList] = useState([]);
	const [rawGigListData, setRawGigListData] = useState('');

	useEffect(() => {
		fetch('../../GigGuide/gigs.txt')
			.then(res => res.text())
			.then(text => setRawGigListData(text));
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
									<p className='ticketed-gig'>{gigName}</p>{' '}
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
					alt=''
				/>
				<GigListings />
			</div>
			<Footer />
		</div>
	);
}
