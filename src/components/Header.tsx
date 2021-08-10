import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {}

function Header({}: Props): ReactElement {
	const router = useRouter();
	const url = router.pathname;

	return (
		<header className='flex border-b-2 border-purple-700'>
			<ul className='self-end flex gap-3'>
				<li className={`link ${url === '/' ? 'active' : ''}`}>
					<Link href='/'>Home</Link>
				</li>
				<li className={`link ${url === '/add' ? 'active' : ''}`}>
					<Link href='/add'>New Question</Link>
				</li>
				<li className={`link ${url === '/leaderboard' ? 'active' : ''}`}>
					<Link href='/leaderboard'>Leader Board</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
