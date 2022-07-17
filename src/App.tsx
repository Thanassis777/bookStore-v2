import {Suspense} from 'react';
import Routing from './routes/Routing';
import Layout from './hocs/Layout';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

function App() {
    return (
        <Suspense fallback="loading">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Layout>
                            <Routing />
                        </Layout>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
