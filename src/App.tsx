import {Suspense} from 'react';
import Routing from './routes/Routing';
import Layout from './hocs/Layout';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
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
