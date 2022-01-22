import React, { useEffect, useState } from 'react';
import { Header, Layout, PageContainer } from '@myscope/components';
import { FlowChart } from '@myscope/visualizations';
import axios from 'axios';
import { getNavButtons } from '../modules/main/NavButtons';

const DagViewer: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.ag-grid.com/example-assets/olympic-winners.json'
            );
            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <Layout
            title='Webapp'
            subTitle='Dag Viewer'
            extra={getNavButtons('dag')}
        >
            <PageContainer>
                <Header size='small'>A Flow Chart</Header>
                <FlowChart />

                <Header size='small'>Some JSON Data</Header>
                {data.slice(0, 10).map((row, i) => (
                    <div key={`row.athlete ${i}`}>{row.athlete}</div>
                ))}
            </PageContainer>
        </Layout>
    );
};
export default DagViewer;
