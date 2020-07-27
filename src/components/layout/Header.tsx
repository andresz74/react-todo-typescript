import React from 'react';
// import { Link } from 'react-router-dom'
import * as style from './Header.style';

export const Header = () => {
	return (
		<>
			<header className={style.headerStyle}>
				<h1 className={style.titleStyle}>Todo List</h1>
				<div className={style.menuStyle}>
					{/* <Link className={style.linkStyle} to="/">Home</Link> */}
					{/* <Link className={style.linkStyle} to="/about">About</Link> */}
				</div>
			</header>
		</>
	);
};

Header.displayName = 'Header';
