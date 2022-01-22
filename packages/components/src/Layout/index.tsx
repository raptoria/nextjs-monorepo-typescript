import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar, NavBarProps } from '../NavBar';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    scroll-behavior:smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export interface LayoutProps extends NavBarProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>{props.title}</title>
            </Head>
            <NavBar {...props} />
            {props.children}
        </>
    );
};


