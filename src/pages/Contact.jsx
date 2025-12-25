import { useEffect, useState } from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import './CSS/Contact.css';
import map from '../../public/map-trills.png';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Contact() {
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		hpField: '',
	});

	useEffect(() => {
		if (!msg) return;
		setTimeout(() => setMsg(''), 5000);
	}, [msg]);

	const onChange = e => {
		const { name, value } = e.target;

		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const onSubmit = async e => {
		e.preventDefault();

		if (formData.hpField) return;

		if (!formData.name || !formData.email || !formData.message) {
			setMsg('Please check required fields.');
			return;
		}

		const time = Date.now() - Number(e.target.ts.value);
		if (time < 2000) {
			setMsg('Please wait awhile before submitting again.');
			return;
		}

		try {
			const res = await fetch(`${API_BASE}/api/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...formData, ts: e.target.ts.value }),
			});
			if (res.ok) {
				setMsg('Thanks - Your message has been sent!');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
					hpField: '',
				});
			} else {
				const json = await res.json().catch(() => ({}));
				setMsg(json?.error || 'Failed to send. Try again later.');
			}
		} catch (err) {
			console.error(err);
			setMsg('Failed to send. Try again later.');
		}
	};

	return (
		<div className='contact'>
			<NavHeader />
			<div className='contact-container container-theme'>
				<p>
					Give us a call on <span style={{ fontWeight: 'bolder' }}>0771 009 5238</span>
				</p>
				<p>Or drop in (hover to enlarge):</p>
				<div className='location-container'>
					<a
						href='https://maps.app.goo.gl/BKoUnb5pqYY7T2DY9'
						target='_blank'
					>
						Trillians on Google Maps
					</a>
					<img
						className='map-image'
						src={map}
						alt='Map showing Trillians location'
					/>
				</div>

				<p>
					Email: <a href='mailto:info@trilliansnewcastle.co.uk'>info@trilliansnewcastle.co.uk</a>
				</p>
				<p>or leave a message below</p>

				<form
					method='POST'
					action='#'
					onSubmit={onSubmit}
					className='contact-form container-theme'
				>
					<div className='form-element'>
						<label>
							Name <span style={{ color: 'red' }}>*</span>
						</label>
						<input
							type='text'
							name='name'
							id='name'
							onChange={onChange}
							value={formData.name}
						/>
					</div>

					<div className='form-element'>
						<label>
							Email <span style={{ color: 'red' }}>*</span>
						</label>
						<input
							type='email'
							name='email'
							id='email'
							onChange={onChange}
							value={formData.email}
						/>
					</div>

					<div className='form-element'>
						<label>Subject</label>
						<input
							type='text'
							name='subject'
							id='subject'
							onChange={onChange}
							value={formData.subject}
						/>
					</div>

					<div className='form-element'>
						<label>
							Message <span style={{ color: 'red' }}>*</span>
						</label>
						<textarea
							style={{ width: '500px', resize: 'none' }}
							name='message'
							id='message'
							onChange={onChange}
							value={formData.message}
							rows='10'
						/>
					</div>

					<div
						style={{ position: 'absolute', left: '-9999px' }}
						aria-hidden='true'
					>
						<label>
							Leave this field empty
							<input
								name='hp_field'
								id='hp_field'
								autoComplete='off'
								tabIndex='-1'
								onChange={onChange}
								value={formData.hpField}
							/>
						</label>
					</div>

					<input
						type='hidden'
						name='ts'
						id='ts'
						value={Date.now()}
					/>

					<button type='submit'>Send</button>
					{msg && <p>{msg}</p>}
				</form>
			</div>
			<Footer />
		</div>
	);
}
