import {CSSProperties, Suspense} from 'react';
import Routing from './routes/Routing';
import Layout from './hocs/Layout';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ToastMessage from './hocs/ToastMessage';

const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
} as CSSProperties;

function App() {
    return (
        <Suspense fallback={<LoadingSpinner style={spinnerStyle} />}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <ToastMessage>
                            <Layout>
                                <Routing />
                            </Layout>
                        </ToastMessage>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
