import './CSS/NavHeader.css';

export default function NavHeader() {
	return (
		<nav>
			<ul className='nav-links'>
				<li>
					<button>Home</button>
				</li>
				<li>
					<button>About Trillians</button>
				</li>
				<li>
					<button>Gig Guide</button>
				</li>
				<li>
					<button>Drinks</button>
				</li>
				<li>
					<button>Gallery</button>
				</li>
				<li>
					<button>Contact Us</button>
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
