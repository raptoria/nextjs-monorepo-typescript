import React from 'react';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
    return (
        <Component {...pageProps} />
    );
};
export default App;
