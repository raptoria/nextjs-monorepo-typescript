import React from 'react';
import { Layout, PageContainer } from '@myscope/components';
import { getNavButtons } from '../modules/main/NavButtons';

const Index: React.FC = () => {
    return (
        <Layout title='Webapp' extra={getNavButtons('home')}>
            <PageContainer>Some content here</PageContainer>
        </Layout >
    );
};
export default Index;
