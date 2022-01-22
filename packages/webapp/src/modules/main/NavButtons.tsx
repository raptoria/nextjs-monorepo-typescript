import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled(Button).attrs(({ $active }) => ({
	type: $active ? 'primary' : 'secondary'
}))``;

export const getNavButtons = (activeLink: string): React.ReactNode[] => [
	<Link href='/' key='home-link'>
		<StyledLink key='home' $active={activeLink === 'home'}>
			Home
		</StyledLink>
	</Link>,

	<Link href='/dag' key='dag-link'>
		<StyledLink key='dag' $active={activeLink === 'dag'}>
			DAG
		</StyledLink>
	</Link>
];
