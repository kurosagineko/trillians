import { Link } from 'react-router-dom';
import './CSS/NavHeader.css';

export default function NavHeader() {
	return (
		<nav>
			<ul className='nav-links'>
				<li>
					<Link to='/'>
						<button>Home</button>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<button>About Trillians</button>
					</Link>
				</li>
				<li>
					<Link to='/gigs'>
						<button>Gig Guide</button>
					</Link>
				</li>
				<li>
					<button>Drinks</button>
				</li>
				<li>
					<button>Gallery</button>
				</li>
				<li>
					<Link to='/contact'>
						<button>Contact Us</button>
					</Link>
				</li>
			</ul>
			<ul className='nav-links'>
				<li>
					<button>Facebook</button>
				</li>
				<li>
					<button>Twitter</button>
				</li>
				<li>
					<button>Insta</button>
				</li>
			</ul>
		</nav>
	);
}
