import React, { ReactElement } from 'react';

interface Props {}

function Header({}: Props): ReactElement {
	return <header className='border-b-4 border-purple-700'>HEADER</header>;
}

export default Header;
