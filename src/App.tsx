import {Suspense} from 'react';
import Routing from './routes/Routing';
import Layout from './hocs/Layout';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Routing />
            </Layout>
        </Suspense>
    );
}

export default App;
